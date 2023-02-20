import { Module } from '@nestjs/common';
import { BoardsResolver } from './boards.resolver';
import { BoardsService } from './boards.service';

@Module({
  imports: [],
  providers: [
    BoardsResolver, //
    BoardsService, //
  ], // AppController(AppService)의존성주입되는부분
})
export class BoardsModule {}
