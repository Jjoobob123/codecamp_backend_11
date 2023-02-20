import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/board.entity';
import { IBoardsServiceCreate } from './interfaces/boards-service.interface';

// 의존성 주입할수 있는
// 디폴트: 싱글톤, 리퀘스트:리퀘스트 올떄마다 싱글톤하는거(매 요청마다 new),트렌치먼트 :수시로(매주입마다 new)
@Injectable({ scope: Scope.DEFAULT }) //인섹션-스코프 => 싱글톤(new 한번)으로 할래 말래?
export class BoardsService {
  findAll(): Board[] {
    // 1.DB에 접속후, 데이터를 조회 => 데이터베이스 조회했다고 가정.
    const result = [
      {
        number: 1,
        writer: 'cho',
        title: '제목입니다',
        contents: '내용이에요!',
      },
      {
        number: 2,
        writer: 'jo',
        title: '바보입니다',
        contents: '바보에요!',
      },
      {
        number: 3,
        writer: 'hyun',
        title: '주현입니다',
        contents: '주현이에요!',
      },
    ];

    // 2.DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
    return result;
  }

  create({ createBoardInput }: IBoardsServiceCreate): string {
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);

    // 2. DB에 접속 후 , 데이터를 저장 => 데이터 저장했다고 가정.

    // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
    return '게시물 등록에 성공하였습니다!';
  }
}
