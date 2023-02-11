import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRoomType } from './entities/productsRoomTypes.entity';
import { ProductRoomTypesRecolver } from './productRoomTypes.resolver';
import { ProductRoomTypesService } from './productRoomTypes.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductRoomType, //
    ]),
  ],
  providers: [ProductRoomTypesRecolver, ProductRoomTypesService],
})
export class ProductRoomTypesModule {}
