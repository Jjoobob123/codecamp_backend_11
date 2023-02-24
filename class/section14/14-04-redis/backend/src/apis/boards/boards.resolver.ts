import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Cache } from 'cache-manager';
import { BoardsService } from './boards.service';
import { CreateBoardInput } from './dto/create-board.input';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, //

    @Inject(CACHE_MANAGER)
    private readonly chaheManager: Cache,
  ) {}

  @Query(() => String, { nullable: true })
  async fetchBoards(): Promise<string> {
    // 1. 캐시에 조회하는 연습
    const mycache = await this.chaheManager.get('qqq');
    console.log(mycache);

    // 2. 조회완료 메시지 전달
    return '캐시 조회완료!!';

    // 레디스 연습 위해 주석걸기!
    // return this.boardsService.findAll();
  }

  @Mutation(() => String, { nullable: true })
  async createBoard(
    // @Args('write') writer: string,
    // @Args('title') title: string,
    // @Args({ name: 'contents', nullable: true }) contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ): Promise<string> {
    // 1. 캐시에 등록하는 연습
    this.chaheManager.set('qqq', createBoardInput, {
      ttl: 50000,
    });
    // set= save , input 통째로 넣을 수 있음, 0=> 영구저장

    // 2. 캐시 등록 완료
    return '캐시 등록 완료!!!';

    // 레디스 연습 위해 주석 걸기
    // return this.boardsService.create({ createBoardInput });
  }
}
