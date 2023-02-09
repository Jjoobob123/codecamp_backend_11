import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsSaleslocationsService } from '../productsSaleslocations/productSaleslocations.service';
import { Product } from './entities/product.entity';
import {
  IProductsServiceCheckSoldout,
  IProductsServiceCreate,
  IProductsServiceUpdate,
  IProductsServiceFindOne,
  IProductsServiceDelete,
} from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //

    private readonly productsSaleslocationsService: ProductsSaleslocationsService, //
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: ['productSaleslocation', 'productCategory'],
      //연결된 테이블들 불러올수 있게 해준다. find 속성 중에 하나
    });
  }

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation', 'productCategory'],
    });
  }

  async create({
    createProductInput,
  }: IProductsServiceCreate): Promise<Product> {
    // 1. 상품 하나만 등록할 때 사용하는 방법!
    // const result = this.productsRepository.save({

    //   ...createProductInput,

    //   // 하나 하나 직접 나열하는 방식
    //   //   name: '마우스',
    //   //   description: '좋은 마우스',
    //   //   price: 3000,
    // });

    // 2. 상품과 상품거래위치를 같이 등록하는 경우
    const { productSaleslocation, productCategoryId, ...product } =
      createProductInput;

    const result = await this.productsSaleslocationsService.create({
      productSaleslocation,
    }); // 서비스를 타고 가야 하는 이유는 ,,?
    //  // 레파지토리(저장소)에 직접 접근하면 검증 로직을 통일 시킬 수 없음

    const result2 = this.productsRepository.save({
      ...product,
      productSaleslocation: result,
      // 이 로직을 result 로 대체해서 넣을수 있다.
      // {
      //   id: result.id,
      //   address: result.address,
      // },
      productCategory: {
        id: productCategoryId,
        // 만약에, name까지 받고 싶으면?
        //     1) createProductInput에서 카테고리 name도 받아오기
        //     2) productCategoryId를 사용해서 카테고리 name을 조회하기
      },

      // 하나하나 직접 나열하는 방식 위에 스프레드연산자로 쉽게 나열가능
      // name: product.name,
      // description: product.description,
      // price: product.price,
      // productSaleslocation: {
      //   id: result.id,
      // },
    });

    return result2;
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

  async delete({ productId }: IProductsServiceDelete) {
    // 1. 진짜 삭제
    // const result = await this.productsRepository.delete({ id: productId });
    // return result.affected ? true : false;
    // affected 실제로 영향이 갔는지 안갔는지

    // 2. 소프트 삭제(직접구현) - isDeleted
    // this.productsRepository.update({ id: productId }, { isDeleted: true });

    // 3. 소프트 삭제(직접구현) - 삭제된 날짜도 기록하자 deletadAt 초기값을 비워놓자(null값으로)
    // this.productsRepository.update({id:productId},{deletedAt: new Date()})

    // 4. 소프트 삭제(TypeORM 제공) - softRemove
    // this.productsRepository.softRemove ({id:productId})  // 단점: id로만 삭제 가능
    //                                                      // 장점: 여러ID 한번에 지우기도 가능
    //                                                      //     => .softRemove([{id: qqq}, {id: aaa}])
    // 5. 소프트 삭제(TypeORM 제공) - softDelete
    const result = await this.productsRepository.softDelete({ id: productId }); // 단점: 여러 ID 한번에 지우기 불가능
    return result.affected ? true : false; //                                          // 장점: 다른 칼럼으로도 삭제 가능( name,price 등으로)
  }
}
