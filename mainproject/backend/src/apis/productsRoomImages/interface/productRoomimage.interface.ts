import { ProductRoomType } from 'src/apis/productsRoomTypes/entities/productsRoomTypes.entity';
import { CreateProductRoomImageInput } from '../dto/create-productsroomlmage.input';
import { UpdateProductRoomImageInput } from '../dto/update-productsroomlmage.input';

export interface IProductRoomImageFindOne {
  productRoomImageId: string;
}

export interface IProductRoomImageCreate {
  createProductRoomImageInput: CreateProductRoomImageInput;
}

export interface IProductRoomImageUpdate {
  productRoomImageId: string;
  updateProductRoomImageInput: UpdateProductRoomImageInput;
}
// ======================= storage services

export interface IProductsRoomImagesServiceFindByNames {
  imagesUrl: string[];
}

export interface IProductsRoomImagesServiceBulkInsert {
  imagesUrl: {
    image_url: string;
  }[];
}

export interface IProductsRoomImagesServiceDelete {
  // id: number;
  productsRoomTypeId: string;
}

export interface IProductsRoomImagesServiceRestore {
  imagesId: string;
}
