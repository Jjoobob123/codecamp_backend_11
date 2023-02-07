import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProductRoomType } from 'src/apis/productsRoomTypes/entities/productsRoomTypes.entity';

@Entity()
export class ProductRoomImage {
  @PrimaryGeneratedColumn('uuid')
  room_image_id: string;

  @Column()
  name: string;

  @Column()
  room_image_url: string;

  @Column()
  is_main: boolean;

  @ManyToOne(
    () => ProductRoomType,
    (productsRoomType) => productsRoomType.productsRoomImage,
  )
  productsRoomType: ProductRoomType;
}
