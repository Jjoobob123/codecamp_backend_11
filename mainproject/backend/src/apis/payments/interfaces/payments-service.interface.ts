import { IAuthUser } from 'src/commons/interfaces/context';
import {
  Payment,
  POINT_TRANSACTION_STATUS_ENUM,
} from '../entities/payments.entity';

export interface IPointsPaymentsFindOneByImpUid {
  impUid: string;
}

export interface IPaymentsServiceCreateForPayment {
  impUid: string;
  amount: number;
  user: IAuthUser['user'];
}

export interface IPointsPaymentsFindOneCheckDuplication {
  impUid: string;
}

export interface IImpUidServiceFindOne {
  impUid: string;
}

export interface IPaymentsServiceFindByImpUidAndUser {
  impUid: string;
  user: IAuthUser['user'];
}

export interface IPaymentsServiceCancel {
  impUid: string;
  user: IAuthUser['user'];
}

export interface IPaymentsServiceCheckAlreadyCanceled {
  payments: Payment[];
}

export interface IPaymentsServiceCheckHasCancelablePayment {
  payments: Payment[];
}

export interface IPointsPaymentsCreate {
  impUid: string;
  amount: number;
  user: IAuthUser['user'];
  status?: POINT_TRANSACTION_STATUS_ENUM;
}
