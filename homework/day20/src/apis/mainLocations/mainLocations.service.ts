import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MainLocation } from './entities/mainLocations.entity';
import { IProductMainLocationsServiceCreate } from './interface/mainLocations.interface';

@Injectable()
export class MainLocationsService {
  constructor(
    @InjectRepository(MainLocation)
    private readonly mainLocationRepository: Repository<MainLocation>, //
  ) {}

  create({ name }: IProductMainLocationsServiceCreate): Promise<MainLocation> {
    return this.mainLocationRepository.save({ name });
  }
}
