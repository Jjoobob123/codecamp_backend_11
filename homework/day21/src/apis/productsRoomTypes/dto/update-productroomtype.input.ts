import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductRoomTypeInput } from './create-productroomtype.input';

@InputType()
export class UpdateProductRoomTypeInput extends PartialType(
  CreateProductRoomTypeInput,
) {}
