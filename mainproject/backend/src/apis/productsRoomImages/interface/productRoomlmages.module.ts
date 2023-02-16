import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRoomImage } from '../entities/productsRoomImages.entity';
import { ProductRoomImagesResolver } from './productRoomlmages.resolver';
import { ProductRoomImagesSerivce } from './productRoomlmages.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductRoomImage, //
    ]),
  ],
  providers: [
    ProductRoomImagesResolver, //
    ProductRoomImagesSerivce,
  ],
})
export class ProductRoomImagesModule {}
