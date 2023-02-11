import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import {
  IProductServiceCreate,
  IProductServiceFindOne,
  IProductsServiceCheckSoldout,
  IProductsServiceDelete,
  IProductsServiceRestore,
  IProductsServiceUpdate,
} from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: ['productCategory'],
    });
  }

  findOne({ productId }: IProductServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({
      where: { id: productId },
      relations: ['productCategory'],
    });
  }

  findAllWithDeleted(): Promise<Product[]> {
    return this.productsRepository.find({
      withDeleted: true,
    });
  }

  async create({
    createProductInput,
  }: IProductServiceCreate): Promise<Product> {
    // const result = this.productsRepository.save({
    //   ...createProductInput,
    // });
    const { productCategoryId, ...product } = createProductInput;

    const result = await this.productsRepository.save({
      ...product,
      productCategoryId,
    });

    return result;
  }

  async update({
    productId,
    updateProductInput,
  }: IProductsServiceUpdate): Promise<Product> {
    const product = await this.findOne({ productId });

    const result = this.productsRepository.save({
      ...product,
      ...updateProductInput,
    });
    return result;
  }

  // checkSoldout({ product }: IProductsServiceCheckSoldout): void {
  //   if (product.is_Soldout)
  //     throw new UnprocessableEntityException('이미 판매 완료된 상품입니다');
  // }

  async delete({ productId }: IProductsServiceDelete) {
    const result = await this.productsRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }

  async restore({ productId }: IProductsServiceRestore) {
    const result = await this.productsRepository.restore({
      id: productId,
    });

    return result.affected ? true : false;
  }
}
