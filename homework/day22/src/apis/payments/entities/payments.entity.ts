import { Field, Int, ObjectType } from '@nestjs/graphql';
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

@Entity()
@ObjectType()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  order_id: string;

  @Column()
  @Field(() => Date)
  stay_date: Date;

  @Column()
  @Field(() => Int)
  payment_amount: number;

  @Column()
  @Field(() => String)
  payment_method: string;

  @Column({ default: false })
  @Field(() => Boolean)
  is_canceled: boolean;

  @Column()
  @Field(() => Int)
  refund_amount: number;

  @ManyToOne(() => User, (users) => users.payment)
  @Field(() => [User])
  users: User[];

  @ManyToOne(() => Product, (products) => products.payment)
  @Field(() => [Product])
  products: Product[];

  @JoinColumn()
  @OneToOne(() => ProductRoomType)
  @Field(() => [ProductRoomType])
  productsRoomType: ProductRoomType[];
}
