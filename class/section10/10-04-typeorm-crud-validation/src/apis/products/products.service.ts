import {
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import {
  IProductsServiceCheckSoldout,
  IProductsServiceCreate,
  IProductsServiceUpdate,
} from './interfaces/products-service.interface';

interface IProductsServiceFindOne {
  productId: string;
}

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({ where: { id: productId } });
  }

  create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
    const result = this.productsRepository.save({
      ...createProductInput,

      // 하나 하나 직접 나열하는 방식
      //   name: '마우스',
      //   description: '좋은 마우스',
      //   price: 3000,
    });

    // result 안에는 무엇이 있을까?
    // result = {
    //   id: 'qjklwefiasdj-askdjajk',
    //   name: '마우스',
    //   description: '좋은 마우스'
    //   price: 3000,
    // }
    return result;
  }

  async update({
    productId,
    updateProductInput,
  }: IProductsServiceUpdate): Promise<Product> {
    const product = await this.findOne({ productId });

    //검증 로직을 만들어준다 위 코드
    // const product = await this.productsRepository.findOne({
    //   where: { id: productId },
    // });

    //검증은 서비스에서 하자!!
    this.checkSoldout({ product });

    // 위 코드로 더 간결하게 쓸수 있음
    // if (product.isSoldout) {
    //   // 예외를 브라우저를 보내주자
    //   throw new HttpException(
    //     '이미 판매 완료된 상품입니다',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }

    //this.productsRepository.create; // DB접속이랑 관련 없음,등록을 위해서 빈 껍데기 객체 만들기 위함
    //this.productsRepository.insert; // 결과를 객체로 못 돌려 받는 등록 방법
    //this.products

    const result = this.productsRepository.save({
      // id: productId,
      // isSoldout:  product.isSoldout,
      // name: product.name,
      // description: product.description,
      // price : product.price,
      // 스프레드 연산자를 써서 2줄로 축약 가능
      ...product, //수정 후 , 수정되지 않은 다른 결과값까지 모두 객체로 돌려 받고 싶을 때
      ...updateProductInput,
    });
    return result;
  }

  // 1. checkSoldout을 함수로 만든는 이유 => 수정시, 삭제시등 같은 검증 로직 사용
  checkSoldout({ product }: IProductsServiceCheckSoldout): void {
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미판매 완료된 상품입니다.!!!');
    }
  }
}
