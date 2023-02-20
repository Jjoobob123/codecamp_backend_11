import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateProductRoomTypeInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  headcount: number;

  @Field(() => String)
  productId: string;

  @Field(() => [String])
  imagesUrl: string[];
}
