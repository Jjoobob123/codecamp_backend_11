import { Field, InputType } from '@nestjs/graphql';

// @InputType()
// export class SubLocationInput extends OmitType(
//   SubLocation, //
//   ['id'], //
//   InputType, //
// ) {}

@InputType()
export class CreateSubLocationInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  mainLocationId: string;
}
