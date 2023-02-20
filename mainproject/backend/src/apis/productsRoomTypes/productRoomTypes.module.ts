import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../products/entities/product.entity';
import { ProductsService } from '../products/products.service';
import { ProductRoomImage } from '../productsRoomImages/entities/productsRoomImages.entity';
import { ProductRoomImagesSerivce } from '../productsRoomImages/productRoomimage.service';
import { ProductRoomType } from './entities/productsRoomTypes.entity';
import { ProductRoomTypesResolver } from './productRoomTypes.resolver';
import { ProductRoomTypesService } from './productRoomTypes.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductRoomType, //
      ProductRoomImage,
      Product,
    ]),
  ],
  providers: [
    ProductRoomTypesResolver,
    ProductRoomTypesService,
    ProductRoomImagesSerivce,
    ProductsService,
  ],
})
export class ProductRoomTypesModule {}
