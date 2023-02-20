import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductRoomImageInput {
  @Field(() => String)
  image_url: string;

  // @Field(() => Boolean)
  // status: boolean;

  @Field(() => String)
  productRoomTypeId: string;
}
