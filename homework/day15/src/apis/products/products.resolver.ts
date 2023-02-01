import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Starbuck } from './entities/product.entity';
import { CreateStarbuckInput } from './dto/create-starbuck.input';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Starbuck], { nullable: true })
  fetchStarbucks(): Starbuck[] {
    return this.productsService.fetchStarbucks();
  }

  @Mutation(() => String, { nullable: true })
  createStarbucks(
    @Args('createStarbuckInput') createStarbuckInput: CreateStarbuckInput,
  ): string {
    return this.productsService.create({ createStarbuckInput });
  }
}
