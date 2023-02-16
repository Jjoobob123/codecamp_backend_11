import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductRoomImageInput } from './create-productsroomlmage.input';

@InputType()
export class UpdateProductRoomImageInput extends PartialType(
  CreateProductRoomImageInput,
) {}
