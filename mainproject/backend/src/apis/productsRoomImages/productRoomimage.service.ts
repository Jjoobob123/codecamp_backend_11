import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, InsertResult, Repository } from 'typeorm';
import { ProductRoomImage } from './entities/productsRoomImages.entity';
import {
  IProductRoomImageCreate,
  IProductRoomImageFindOne,
  IProductRoomImageUpdate,
  IProductsRoomImagesServiceBulkInsert,
  IProductsRoomImagesServiceDelete,
  IProductsRoomImagesServiceFindByNames,
  IProductsRoomImagesServiceRestore,
} from './interface/productRoomimage.interface';
@Injectable()
export class ProductRoomImagesSerivce {
  constructor(
    @InjectRepository(ProductRoomImage)
    private readonly productRoomImagesRepository: Repository<ProductRoomImage>,
  ) {}

  findAll(): Promise<ProductRoomImage[]> {
    return this.productRoomImagesRepository.find();
  }

  findOne(
    { productRoomImageId }: IProductRoomImageFindOne, //
  ): Promise<ProductRoomImage> {
    return this.productRoomImagesRepository.findOne({
      where: { id: productRoomImageId },
    });
  }

  async create({
    createProductRoomImageInput,
  }: IProductRoomImageCreate): Promise<ProductRoomImage> {
    const { productRoomTypeId, ...productRoomImages } =
      createProductRoomImageInput;
    const result = await this.productRoomImagesRepository.save({
      ...productRoomImages,
      productRoomTypeId,
    });
    return result;
  }

  async update({
    productRoomImageId,
    updateProductRoomImageInput,
  }: IProductRoomImageUpdate): Promise<ProductRoomImage> {
    const productRoomType = await this.findOne({ productRoomImageId });
    const result = this.productRoomImagesRepository.save({
      ...productRoomType,
      updateProductRoomImageInput,
    });
    console.log(result);
    return result;
  }

  // ======================= storage services

  findByRoomType({ productsRoomTypeId }) {
    return this.productRoomImagesRepository.find({
      where: { productsRoomType: { id: productsRoomTypeId } },
    });
  }

  findByNames({ imagesUrl }: IProductsRoomImagesServiceFindByNames) {
    return this.productRoomImagesRepository.find({
      where: { image_url: In(imagesUrl) },
    });
  }

  bulkInsert({
    imagesUrl,
  }: IProductsRoomImagesServiceBulkInsert): Promise<InsertResult> {
    return this.productRoomImagesRepository.insert([...imagesUrl]);
  }

  delete({ productsRoomTypeId }: IProductsRoomImagesServiceDelete) {
    return this.productRoomImagesRepository.delete(productsRoomTypeId);
  }
}
