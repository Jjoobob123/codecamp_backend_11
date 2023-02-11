import { CreateProductInput } from '../dto/create-product.input';
import { UpdateProductInput } from '../dto/update-product.input';
import { Product } from '../entities/product.entity';

export interface IProductServiceCreate {
  createProductInput: CreateProductInput;
}

export interface IProductServiceFindOne {
  productId: string;
}

export interface IProductsServiceCheckSoldout {
  product: Product;
}

export interface IProductsServiceUpdate {
  productId: string;
  updateProductInput: UpdateProductInput;
}

export interface IProductsServiceRestore {
  productId: string;
}

export interface IProductsServiceDelete {
  productId: string;
}
