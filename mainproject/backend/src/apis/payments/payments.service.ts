import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { IamportsService } from '../iamport/iamport.service';
import { User } from '../users/entities/user.entity';
import {
  Payment,
  POINT_TRANSACTION_STATUS_ENUM,
} from './entities/payments.entity';
import {
  IPaymentsServiceCancel,
  IPaymentsServiceCheckAlreadyCanceled,
  IPaymentsServiceCheckHasCancelablePayment,
  IPaymentsServiceCreateForPayment,
  IPaymentsServiceFindByImpUidAndUser,
  IPointsPaymentsCreate,
  IPointsPaymentsFindOneByImpUid,
  IPointsPaymentsFindOneCheckDuplication,
} from './interfaces/payments-service.interface';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentsRepository: Repository<Payment>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    private readonly importsService: IamportsService,
    private readonly dataSource: DataSource,
  ) {}
  // 이미 결제됐던 id인지 검증하기 🐧2 findOneByImpUid 만들어주기
  findOneByImpUid({
    impUid,
  }: IPointsPaymentsFindOneByImpUid): Promise<Payment> {
    return this.paymentsRepository.findOne({
      where: { impUid },
      lock: { mode: 'pessimistic_write' },
    });
  }

  async checkDuplication({
    impUid,
  }: IPointsPaymentsFindOneCheckDuplication): Promise<void> {
    const result = await this.findOneByImpUid({ impUid });
    if (result) throw new ConflictException('이미 등록된 결제 아이디입니다.');
  }

  async create({
    impUid,
    amount,
    user: _user,
    status,
  }: IPointsPaymentsCreate): Promise<Payment> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('SERIALIZABLE');

    try {
      // 1. payment 테이블에 거래기록 1줄 생성
      const payment = await queryRunner.manager.create({
        impUid,
        amount,
        // user: _user,
        status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT, //안전한 코드 만들기의 한 방향
        // stay: stay
      });

      await queryRunner.manager.save(payment);
      // 2. 유저의 돈 찾아오기
      const user = await queryRunner.manager.findOne({
        where: { id: _user.id },
        lock: { mode: 'pessimistic_write' },
      });
      // 3. 유저의 돈 업데이트
      await queryRunner.manager.update(
        { id: _user.id },
        { point: user.point + amount },
      );

      // 4. 최종결과 브라우저에 돌려주기
      return payment;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async createForPayment({
    impUid,
    amount,
    user,
  }: IPaymentsServiceCreateForPayment): Promise<Payment> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('SERIALIZABLE');

    try {
      // 결제완료 상태인지 검증하기 🐧 🐧 🐧 🐧 🐧 🐧 🐧1
      await this.importsService.checkPaid({ impUid, amount });

      // 이미 결제됐던 id인지 검증하기 🐧 🐧 🐧 🐧 🐧 🐧 🐧2
      await this.checkDuplication({ impUid });

      return this.create({ impUid, amount, user });
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  //  이미 취소됐던 ID인지 검증하기
  findByImpUidAndUser({ impUid, user }: IPaymentsServiceFindByImpUidAndUser) {
    return this.paymentsRepository.find({
      where: { impUid, users: { id: user.id } },
      relations: ['users'],
    });
  }

  checkAlreadyCanceled({
    payments,
  }: IPaymentsServiceCheckAlreadyCanceled): void {
    const canceledPointPayments = payments.filter(
      (el) => el.status === POINT_TRANSACTION_STATUS_ENUM.CANCEL,
    );
    if (canceledPointPayments.length)
      throw new ConflictException('이미 취소된 결제아이디입니다.');
  }

  checkHasCancelablePayment({
    payments,
  }: IPaymentsServiceCheckHasCancelablePayment): void {
    const paidPointPayments = payments.filter(
      (el) => el.status === POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
    );
    if (!paidPointPayments.length)
      throw new UnprocessableEntityException('결제 기록이 존재하지 않습니다.');

    if (paidPointPayments[0].users.point < paidPointPayments[0].amount) {
      throw new UnprocessableEntityException('포인트가 부족합니다.');
    }
  }

  async cancel({ impUid, user }: IPaymentsServiceCancel) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('SERIALIZABLE');

    try {
      // 결제내역 조회하기
      const payments = await this.findByImpUidAndUser({ impUid, user });

      // 이미 취소됐던 ID인지 검증하기
      this.checkAlreadyCanceled({ payments });

      // 포인트가 취소하기에 충분히 있는지 검증하기
      this.checkHasCancelablePayment({ payments });

      // 결제 취소하기
      const canceledAmount = await this.importsService.cancel({ impUid });

      // 취소된 결과 등록하기
      // 모든 로직이 성공했다면 커밋
      await queryRunner.commitTransaction();
      return this.create({
        impUid, //
        amount: -canceledAmount,
        user,
        status: POINT_TRANSACTION_STATUS_ENUM.CANCEL,
      });
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
