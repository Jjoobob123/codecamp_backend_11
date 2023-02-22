import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Payment } from 'src/apis/payments/entities/payments.entity';
import { ProductCategory } from 'src/apis/productsCategories/entities/productsCategories.entity';
import { ProductRoomType } from 'src/apis/productsRoomTypes/entities/productsRoomTypes.entity';
import { SubLocation } from 'src/apis/subLocations/entities/subLocations.entity';

import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ unique: true, length: 20 })
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  review: string;

  // @Column({ default: false })
  // @Field(() => Boolean)
  // is_soldout: boolean;

  @Column({ type: 'decimal', precision: 2, scale: 1 })
  @Field(() => Float)
  star: number;

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.products,
  )
  @Field(() => [ProductCategory])
  productCategory: ProductCategory[];

  @ManyToOne(() => SubLocation, (subLocation) => subLocation.products)
  @Field(() => [SubLocation])
  subLocation: SubLocation[];

  @OneToMany(
    () => ProductRoomType,
    (productsRoomType) => productsRoomType.products,
  )
  @Field(() => ProductRoomType)
  productsRoomType: ProductRoomType;

  @OneToMany(() => Payment, (payment) => payment.products)
  @Field(() => Payment)
  payment: Payment;

  @DeleteDateColumn()
  deletedAt: Date;
}
