import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProductRoomType } from 'src/apis/productsRoomTypes/entities/productsRoomTypes.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class ProductRoomImage {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  image_url: string;

  @Column({ default: false })
  @Field(() => Boolean)
  status: boolean;

  @ManyToOne(
    () => ProductRoomType,
    (productsRoomType) => productsRoomType.productsRoomImage,
  )
  @Field(() => ProductRoomType)
  productsRoomType: ProductRoomType;
}
