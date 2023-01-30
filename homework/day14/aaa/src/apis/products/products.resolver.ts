import { Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => String, { nullable: true })
  fetchStarbucks(): string {
    return this.productsService.fetchStarbucks();
  }
}
