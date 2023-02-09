import { InputType, OmitType } from '@nestjs/graphql';
import { MainLocation } from '../entities/mainLocations.entity';

@InputType()
export class CreateMainLocationInput extends OmitType(
  MainLocation, // MainCategory 엔티티 상속해서 gql 입력 타입 구현
  ['id'], // id 값은 제외
  InputType, // InputType으로 변경
) {}
