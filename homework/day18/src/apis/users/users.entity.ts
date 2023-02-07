import { Coupon } from 'src/apis/coupons/entities/coupons.entity';
import { Payment } from 'src/apis/payments/entities/payments.entity';

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({ length: 5 })
  name: string;

  @Column({ length: 20 })
  password: string;

  @Column()
  create_date: Date;

  @Column({ length: 13 })
  phone_number: string;

  @OneToMany(() => Payment, (payment) => payment.users)
  payment = Payment;

  @ManyToMany(() => Coupon, (coupons) => coupons.coupon_id)
  coupons: Coupon[];
}
