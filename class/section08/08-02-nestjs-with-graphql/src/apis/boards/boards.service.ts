import { Injectable, Scope } from '@nestjs/common';

// 의존성 주입할수 있는
// 디폴트: 싱글톤, 리퀘스트:리퀘스트 올떄마다 싱글톤하는거(매 요청마다 new),트렌치먼트 :수시로(매주입마다 new)
@Injectable({ scope: Scope.DEFAULT }) //인섹션-스코프 => 싱글톤(new 한번)으로 할래 말래?
export class BoardsService {
  qqq(): string {
    return 'Hello World!';
  }
}
