import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/product.entity';
import { ProductRoomImage } from 'src/apis/productsRoomImages/entities/productsRoomImages.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
@ObjectType()
export class ProductRoomType {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ length: 50 })
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => Int)
  headcount: number;

  @ManyToOne(() => Product, (products) => products.productsRoomType)
  @Field(() => [Product])
  products: Product;

  @OneToMany(
    () => ProductRoomImage,
    (ProductsRoomImage) => ProductsRoomImage.productsRoomType,
  )
  @Field(() => [ProductRoomImage])
  productsRoomImage: ProductRoomImage;
}
