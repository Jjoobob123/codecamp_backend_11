import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  userId: string;

  @Field(() => String)
  name: string;

  // @Field(() => String)
  password: string;

  @Field(() => Date)
  create_date: Date;

  @Field(() => String)
  phone_number: string;
}
