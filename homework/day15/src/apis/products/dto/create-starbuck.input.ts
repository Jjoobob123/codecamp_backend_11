import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateStarbuckInput {
  @Field(() => Int)
  number: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  kcal: number;

  @Field(() => Int)
  caffeine: number;

  @Field(() => Int)
  fat: number;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  protein: number;

  @Field(() => Int)
  sodium: number;

  @Field(() => Int)
  sugar: number;
}
