import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductRoomImageInput } from '../dto/create-productsroomlmage.input';
import { UpdateProductRoomImageInput } from '../dto/update-productsroomlmage.input';
import { ProductRoomImage } from '../entities/productsRoomImages.entity';

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
    return result;
  }
}

interface IProductRoomImageFindOne {
  productRoomImageId: string;
}

interface IProductRoomImageCreate {
  createProductRoomImageInput: CreateProductRoomImageInput;
}
interface IProductRoomImageUpdate {
  productRoomImageId: string;
  updateProductRoomImageInput: UpdateProductRoomImageInput;
}
