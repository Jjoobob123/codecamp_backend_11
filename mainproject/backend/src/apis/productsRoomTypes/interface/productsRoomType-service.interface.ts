import { CreateProductRoomTypeInput } from '../dto/create-productroomtype.input';
import { UpdateProductRoomTypeInput } from '../dto/update-productroomtype.input';

export interface IProductRoomTypeCreate {
  createProductRoomTypeInput: CreateProductRoomTypeInput;
}

export interface IProductRoomTypeUpdate {
  updateProductRoomTypeInput: UpdateProductRoomTypeInput;
  productRoomTypeId: string;
}

export interface IProductRoomTypeFindOne {
  productRoomTypeId: string;
}
