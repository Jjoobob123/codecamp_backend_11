import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { SubLocation } from './entities/subLocations.entity';
import { IProductSubLocationCreate } from './interface/subLocations.interface';

@Injectable()
export class ProductsSubLocaionService {
  constructor(
    @InjectRepository(SubLocation)
    private readonly productsSubLocationRepository: Repository<SubLocation>,
  ) {}

  //   create({ productSubLocation }) {
  //     return this.productsSubLocationRepository.save({
  //       ...productSubLocation,
  //     });
  //   }

  async create({
    createSubLocationInput, //
  }: IProductSubLocationCreate): Promise<SubLocation> {
    const { name, mainLocationId } = createSubLocationInput;
    const subLocation = await this.productsSubLocationRepository.save({
      name,
      mainLocationId: {
        id: mainLocationId,
      },
    });
    return subLocation;
  }
}
