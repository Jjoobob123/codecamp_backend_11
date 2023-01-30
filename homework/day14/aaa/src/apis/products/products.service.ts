import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class ProductsService {
  fetchStarbucks(): string {
    return '스타벅스 커피목록 조회합니다!';
  }
}
