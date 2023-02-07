import { Product } from 'src/apis/products/entities/products.entity';
import { ProductRoomType } from 'src/apis/productsRoomTypes/entities/productsRoomTypes.entity';
import { User } from 'src/apis/users/entities/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  order_id: string;

  @Column()
  stay_date: Date;

  @Column()
  payment_amount: number;

  @Column()
  payment_method: string;

  @Column({ default: false })
  is_canceled: boolean;

  @Column()
  refund_amount: number;

  @ManyToOne(() => User, (users) => users.payment)
  users: User;

  @ManyToOne(() => Product, (products) => products.payment)
  products: Product;

  @JoinColumn()
  @OneToOne(() => ProductRoomType)
  productsRoomType: ProductRoomType;
}
