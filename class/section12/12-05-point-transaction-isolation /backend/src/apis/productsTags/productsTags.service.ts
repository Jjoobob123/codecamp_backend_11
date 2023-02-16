import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, InsertResult, Repository } from 'typeorm';
import { ProductTag } from './entities/productTag.entity';
import {
  IProductsTagsServiceBulkInsert,
  IProductsTagsServicefindByNames,
} from './interfaces/products-Tags-service.interface';

@Injectable()
export class ProductsTagsService {
  constructor(
    @InjectRepository(ProductTag)
    private readonly productsTagsRepository: Repository<ProductTag>,
  ) {}

  findByNames({ tagNames }: IProductsTagsServicefindByNames) {
    return this.productsTagsRepository.find({
      where: { name: In(tagNames) },
    }); // [{id:"전자제품ID",name: "전자제품"}]
  }

  bulkInsert({ names }: IProductsTagsServiceBulkInsert): Promise<InsertResult> {
    return this.productsTagsRepository.insert([...names]); //bulk-insert 배열안에있는걸 다 저장 save()로는 불가능
  }
}
