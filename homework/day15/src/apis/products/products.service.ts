import { Injectable, Scope } from '@nestjs/common';
import { Starbuck } from './entities/product.entity';
import { IStarbucksServiceCreate } from './interfaces/starbucks-service.interface';

@Injectable({ scope: Scope.DEFAULT })
export class ProductsService {
  fetchStarbucks(): Starbuck[] {
    const result = [
      {
        number: 1,
        name: '아메리카노',
        kcal: 10,
        caffeine: 10,
        fat: 10,
        price: 10,
        protein: 10,
        sodium: 10,
        sugar: 10,
      },
      {
        number: 2,
        name: '에스프레소',
        kcal: 20,
        caffeine: 20,
        fat: 20,
        price: 20,
        protein: 20,
        sodium: 20,
        sugar: 20,
      },
      {
        number: 3,
        name: '카페라떼',
        kcal: 300,
        caffeine: 300,
        fat: 300,
        price: 300,
        protein: 300,
        sodium: 300,
        sugar: 300,
      },
      {
        number: 4,
        name: '카푸치노',
        kcal: 40,
        caffeine: 40,
        fat: 40,
        price: 40,
        protein: 40,
        sodium: 40,
        sugar: 40,
      },
      {
        number: 5,
        name: '카페모카',
        kcal: 55,
        caffeine: 50,
        fat: 50,
        price: 50,
        protein: 50,
        sodium: 50,
        sugar: 50,
      },
    ];
    return result;
  }

  create({ createStarbuckInput }: IStarbucksServiceCreate): string {
    // console.log(createStarbuckInput.number);
    // console.log(createStarbuckInput.name);
    // console.log(createStarbuckInput.kcal);
    // console.log(createStarbuckInput.caffeine);
    // console.log(createStarbuckInput.fat);
    // console.log(createStarbuckInput.price);
    // console.log(createStarbuckInput.protein);
    // console.log(createStarbuckInput.sodium);
    // console.log(createStarbuckInput.sugar);
    console.log({ createStarbuckInput });

    // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
    return '등록에 성공하였습니다!';
  }
}
