import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsService } from '../products/products.service';
import { ProductRoomImagesSerivce } from '../productsRoomImages/productRoomimage.service';
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

    private readonly productService: ProductsService,

    private readonly productRoomImagesService: ProductRoomImagesSerivce,
  ) {}

  findAll(): Promise<ProductRoomType[]> {
    return this.productRoomTypeRepository.find({
      relations: ['productsRoomImage', 'product'],
    });
  }

  findOne({
    productsRoomTypeId,
  }: IProductRoomTypeFindOne): Promise<ProductRoomType> {
    return this.productRoomTypeRepository.findOne({
      where: { id: productsRoomTypeId },
      relations: ['productsRoomImage', 'product'],
    });
  }

  async create({
    createProductRoomTypeInput,
  }: IProductRoomTypeCreate): Promise<ProductRoomType> {
    const { productId, imagesUrl, ...productRoomTypes } =
      createProductRoomTypeInput;
    // const products = await this.productService.findOne({
    //   productId,
    // });

    const prevImages = await this.productRoomImagesService.findByNames({
      imagesUrl,
    });
    // console.log('🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧imagesUrl : ', imagesUrl);

    const temp = [];
    imagesUrl.forEach((e) => {
      const isExists = prevImages.find((prevEl) => e === prevEl.image_url);
      if (!isExists) temp.push({ image_url: e });
    });
    // console.log('🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧temp : ', temp);

    const newImages = await this.productRoomImagesService.bulkInsert({
      imagesUrl: temp,
    });
    const urls = [...prevImages, ...newImages.identifiers];
    // console.log('🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧 urls : ', urls);
    // console.log('🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧product : ', productId);
    const result = await this.productRoomTypeRepository.save({
      ...productRoomTypes,
      products: { id: productId },
      imagesUrl: urls,
    });
    return result;
  }

  async update({
    productsRoomTypeId,
    updateProductRoomTypeInput,
  }: IProductRoomTypeUpdate): Promise<ProductRoomType> {
    const product = await this.findOne({ productsRoomTypeId });
    console.log('🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧🐧 product : ', product);

    // storage update 첫시작
    const imagesUrl = await this.productRoomImagesService.findByRoomType({
      productsRoomTypeId,
    });

    const images = [];
    imagesUrl.forEach((el) => {
      images.push({ image_url: el });
    });

    await this.productRoomImagesService.delete({
      productsRoomTypeId,
    });

    const newImages = await this.productRoomImagesService.bulkInsert({
      imagesUrl: images,
    });
    // storage update 마지막

    const result = await this.productRoomTypeRepository.save({
      ...product,
      updateProductRoomTypeInput,
      imagesUrl: newImages,
    });
    return result;
  }
}

// interface IProductsRoomTypesServiceDelete {
//   productsRoomTypeId: string;
// }
