import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';

@EventSubscriber() //  implements EntitySubscriberInterface => 구현한다
export class ProductSubscriber implements EntitySubscriberInterface {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this); // this=> 자기 자신을 의미하는 뜻
  }

  listenTo(): string | Function {
    // Product 테이블을 관측하고 있을거에요
    return Product;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log(event);

    const id = event.entity.id;
    const name = event.entity.name;
    const description = event.entity.description;
    const price = event.entity.price;
    const isSoldout = event.entity.isSoldout;

    console.log(`${id} ${name} ${description} ${price} ${isSoldout}`);
    // 빅쿼리(거대데이터베이스:있는그대로 마구마구 집어 넣는 곳)나 엘라스틱서치에 담기

    // 1. 트리거는 언제 사용하면 안될까?
    // 트랜잭션 연결된 중요 내용들..! 결제같은거

    // 2. 어떤 것들을 사용하면 좋을까?
    // 메인 로직에 큰 피해를 안끼치는 로직들 ...(통계 계산하기 , 로그 쌓아놓기)
  }
}
