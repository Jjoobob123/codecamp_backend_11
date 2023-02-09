import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubLocation } from './entities/subLocations.entity';
import { SubLocationResolver } from './subLocations.resolver';
import { ProductsSubLocaionService } from './subLocations.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SubLocation, //
    ]),
  ],
  providers: [SubLocationResolver, ProductsSubLocaionService],
})
export class SubLocationsModule {}
