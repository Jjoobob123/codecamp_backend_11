import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { MainLocation } from './entities/mainLocations.entity';
import { MainLocationsService } from './mainLocations.service';

@Resolver()
export class MainLocationResolver {
  constructor(
    private readonly mainCategoriesService: MainLocationsService, //
  ) {}

  @Mutation(() => MainLocation)
  createMainCategory(@Args('name') name: string): Promise<MainLocation> {
    return this.mainCategoriesService.create({ name });
  }
}
