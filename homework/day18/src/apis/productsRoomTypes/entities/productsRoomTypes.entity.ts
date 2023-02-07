import { Product } from 'src/apis/products/entities/products.entity';
import { ProductRoomImage } from 'src/apis/productsRoomImages/entities/productsRoomImages.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class ProductRoomType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  price: number;

  @Column()
  headcount: number;

  @ManyToOne(() => Product, (products) => products.productsRoomType)
  products: Product;

  @OneToMany(
    () => ProductRoomImage,
    (ProductsRoomImage) => ProductsRoomImage.productsRoomType,
  )
  productsRoomImage: ProductRoomImage;
}
