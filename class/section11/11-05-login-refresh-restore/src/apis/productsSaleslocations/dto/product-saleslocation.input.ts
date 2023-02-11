import { InputType, OmitType } from '@nestjs/graphql';
import { ProductSaleslocation } from '../entities/productSaleslocation.entity';

@InputType()
export class ProductSaleslocationInput extends OmitType(
  ProductSaleslocation, //
  ['id'], //
  InputType, // ProductSaleslocation이 ObjectType 이기 때문에 InputType으로 타입 변환해준다.
) {}
