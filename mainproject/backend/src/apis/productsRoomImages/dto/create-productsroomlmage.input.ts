import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductRoomImageInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  url: string;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => String)
  productRoomTypeId: string;
}
