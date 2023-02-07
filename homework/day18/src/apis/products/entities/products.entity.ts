import { Payment } from 'src/apis/payments/entities/payments.entity';
import { ProductCategory } from 'src/apis/productsCategories/entities/productsCategories.entity';
import { ProductRoomType } from 'src/apis/productsRoomTypes/entities/productsRoomTypes.entity';
import { SubLocation } from 'src/apis/subLocations/entities/subLocations.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 20 })
  name: string;

  @Column()
  review: string;

  @Column({ type: 'decimal', precision: 2, scale: 1 })
  star: number;

  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.products,
  )
  productCategory: ProductCategory;

  @ManyToOne(() => SubLocation, (subLocation) => subLocation.products)
  subLocation: SubLocation;

  @OneToMany(
    () => ProductRoomType,
    (productsRoomType) => productsRoomType.products,
  )
  productsRoomType: ProductRoomType;

  @OneToMany(() => Payment, (payment) => payment.products)
  payment: Payment;
}
