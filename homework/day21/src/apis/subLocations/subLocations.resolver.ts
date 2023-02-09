import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateSubLocationInput } from './dto/subLocations.input';
import { SubLocation } from './entities/subLocations.entity';
import { ProductsSubLocaionService } from './subLocations.service';

@Resolver()
export class SubLocationResolver {
  constructor(
    private readonly productsSubLocaionService: ProductsSubLocaionService,
  ) {}

  @Mutation(() => SubLocation)
  createSubLocation(
    @Args('createSubLocationInput')
    createSubLocationInput: CreateSubLocationInput,
  ): Promise<SubLocation> {
    return this.productsSubLocaionService.create({ createSubLocationInput });
  }
}
