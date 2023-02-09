import { InputType, OmitType, PartialType, PickType } from '@nestjs/graphql';

import { CreateProductInput } from './create-product.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  //똑같이 쓰는건 비효율적이므로 Extend(상속)을 받아서 쓴다.
  //   @Field(() => String, { nullable: true })
  //   name?: string;
  //   @Field(() => String, { nullable: true })
  //   description?: string;
  //   @Min(0)
  //   @Field(() => Int, { nullable: true })
  //   price?: number;
}

PickType(CreateProductInput, ['name', 'price']); // 뽑기
OmitType(CreateProductInput, ['description']); // 빼기
PartialType(CreateProductInput); // 물음표 있어도되고 없어도 됨
