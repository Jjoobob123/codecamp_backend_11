import { Field, ObjectType } from '@nestjs/graphql';
import { Coupon } from 'src/apis/coupons/entities/coupons.entity';
import { Payment } from 'src/apis/payments/entities/payments.entity';

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ length: 5 })
  @Field(() => String)
  name: string;

  @Column({ length: 100 })
  // @Field(() => String)
  password: string;

  @Column()
  @Field(() => Date)
  create_date: Date;

  @Column()
  @Field(() => String)
  email: string;

  @Column({ length: 13 })
  @Field(() => String)
  phone_number: string;

  @OneToMany(() => Payment, (payment) => payment.users)
  @Field(() => [Payment])
  payment: Payment;

  @ManyToMany(() => Coupon, (coupons) => coupons.coupon_id)
  @Field(() => [Coupon])
  coupons: Coupon[];

  @CreateDateColumn()
  createAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
