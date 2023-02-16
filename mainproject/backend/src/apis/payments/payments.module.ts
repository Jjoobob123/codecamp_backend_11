import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Payment } from './entities/payments.entity';
import { User } from '../users/entities/user.entity';

import { PaymentsService } from './payments.service';
import { PaymentsResolver } from './payments.resolver';
import { IamportsService } from '../iamport/iamport.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Payment, //
      User,
    ]),
  ],
  providers: [
    PaymentsResolver, //
    PaymentsService,
    IamportsService,
  ],
})
export class PaymentsModule {}
