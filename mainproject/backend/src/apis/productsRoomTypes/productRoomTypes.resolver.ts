import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductRoomTypeInput } from './dto/create-productroomtype.input';
import { UpdateProductRoomTypeInput } from './dto/update-productroomtype.input';
import { ProductRoomType } from './entities/productsRoomTypes.entity';
import { ProductRoomTypesService } from './productRoomTypes.service';

@Resolver()
export class ProductRoomTypesResolver {
  constructor(
    private readonly productRoomTypesService: ProductRoomTypesService,
  ) {}

  @Query(() => [ProductRoomType])
  fetchRoomTypes(
    @Args('productId') productId: string,
  ): Promise<ProductRoomType[]> {
    return this.productRoomTypesService.findAll({ productId });
  }

  @Query(() => ProductRoomType)
  fetchRoomType(
    @Args('productsRoomTypeId') productsRoomTypeId: string, //
  ): Promise<ProductRoomType> {
    return this.productRoomTypesService.findOne({ productsRoomTypeId });
  }

  @Mutation(() => ProductRoomType)
  createProductRoomType(
    @Args('createProductRoomTypeInput')
    createProductRoomTypeInput: CreateProductRoomTypeInput,
  ): Promise<ProductRoomType> {
    return this.productRoomTypesService.create({ createProductRoomTypeInput });
  }

  @Mutation(() => ProductRoomType)
  updateProductRoomType(
    @Args('productsRoomTypeId') productsRoomTypeId: string,
    @Args('updateProductRoomTypeInput')
    updateProductRoomTypeInput: UpdateProductRoomTypeInput,
  ): Promise<ProductRoomType> {
    return this.productRoomTypesService.update({
      productsRoomTypeId,
      updateProductRoomTypeInput,
    });
  }
}
