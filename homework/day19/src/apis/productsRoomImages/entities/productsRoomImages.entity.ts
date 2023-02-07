import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProductRoomType } from 'src/apis/productsRoomTypes/entities/productsRoomTypes.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class ProductRoomImage {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  room_image_id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  room_image_url: string;

  @Column()
  @Field(() => Boolean)
  is_main: boolean;

  @ManyToOne(
    () => ProductRoomType,
    (productsRoomType) => productsRoomType.productsRoomImage,
  )
  @Field(() => [ProductRoomType])
  productsRoomType: ProductRoomType[];
}
