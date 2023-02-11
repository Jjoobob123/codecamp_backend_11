import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductRoomType } from './entities/productsRoomTypes.entity';
import {
  IProductRoomTypeCreate,
  IProductRoomTypeFindOne,
  IProductRoomTypeUpdate,
} from './interface/productsRoomType-service.interface';

@Injectable()
export class ProductRoomTypesService {
  constructor(
    @InjectRepository(ProductRoomType)
    private readonly productRoomTypeRepository: Repository<ProductRoomType>, //
  ) {}

  findAll(): Promise<ProductRoomType[]> {
    return this.productRoomTypeRepository.find({});
  }

  findOne({
    productRoomTypeId,
  }: IProductRoomTypeFindOne): Promise<ProductRoomType> {
    return this.productRoomTypeRepository.findOne({
      where: { id: productRoomTypeId },
    });
  }

  async create({
    createProductRoomTypeInput,
  }: IProductRoomTypeCreate): Promise<ProductRoomType> {
    const { productId, ...productRoomTypes } = createProductRoomTypeInput;
    const result = await this.productRoomTypeRepository.save({
      ...productRoomTypes,
      productId,
    });
    return result;
  }

  async update({
    productRoomTypeId,
    updateProductRoomTypeInput,
  }: IProductRoomTypeUpdate): Promise<ProductRoomType> {
    const product = await this.findOne({ productRoomTypeId });
    const result = this.productRoomTypeRepository.save({
      ...product,
      updateProductRoomTypeInput,
    });
    return result;
  }
}
