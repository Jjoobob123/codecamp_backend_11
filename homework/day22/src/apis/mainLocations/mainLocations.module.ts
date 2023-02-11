import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainLocation } from './entities/mainLocations.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MainLocation]), //
  ],
  providers: [],
})
export class MainLocationsModule {}
