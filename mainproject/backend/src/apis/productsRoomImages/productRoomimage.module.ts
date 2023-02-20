import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRoomImage } from './entities/productsRoomImages.entity';
import { ProductRoomImagesResolver } from './productRoomimage.resolver';
import { ProductRoomImagesSerivce } from './productRoomimage.service';

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
