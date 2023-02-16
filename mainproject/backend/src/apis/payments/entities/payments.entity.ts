import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/product.entity';
import { ProductRoomType } from 'src/apis/productsRoomTypes/entities/productsRoomTypes.entity';
import { User } from 'src/apis/users/entities/user.entity';

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

// status 결제완료 취소완료를 해주기 위해 만들어줌
export enum POINT_TRANSACTION_STATUS_ENUM {
  PAYMENT = 'PAYMENT',
  CANCEL = 'CANCEL',
}

registerEnumType(POINT_TRANSACTION_STATUS_ENUM, {
  name: 'POINT_TRANSACTION_STATUS_ENUM',
});

@Entity()
@ObjectType()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  impUid: string;

  // @Column()
  // @Field(() => Date)
  // stay: Date;

  @Column()
  @Field(() => Int)
  amount: number;

  @Column({ type: 'enum', enum: POINT_TRANSACTION_STATUS_ENUM })
  @Field(() => POINT_TRANSACTION_STATUS_ENUM)
  status: POINT_TRANSACTION_STATUS_ENUM;

  // @Column()
  // @Field(() => String)
  // method: string;

  @ManyToOne(() => User, (users) => users.payment)
  @Field(() => User)
  users: User;

  @ManyToOne(() => Product, (products) => products.payment)
  @Field(() => [Product])
  products: Product[];

  @JoinColumn()
  @OneToOne(() => ProductRoomType)
  @Field(() => [ProductRoomType])
  productsRoomType: ProductRoomType[];
}
