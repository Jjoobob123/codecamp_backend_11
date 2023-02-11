import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductRoomTypeInput } from './dto/create-productroomtype.input';
import { UpdateProductRoomTypeInput } from './dto/update-productroomtype.input';
import { ProductRoomType } from './entities/productsRoomTypes.entity';
import { ProductRoomTypesService } from './productRoomTypes.service';

@Resolver()
export class ProductRoomTypesRecolver {
  constructor(
    private readonly productRoomTypesService: ProductRoomTypesService,
  ) {}

  @Query(() => [ProductRoomType])
  fetchRoomTypes(): Promise<ProductRoomType[]> {
    return this.productRoomTypesService.findAll();
  }

  @Query(() => ProductRoomType)
  fetchRoomType(
    @Args('productRoomTypeId') productRoomTypeId: string, //
  ): Promise<ProductRoomType> {
    return this.productRoomTypesService.findOne({ productRoomTypeId });
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
    @Args('productRoomTypeId') productRoomTypeId: string,
    @Args('updateProductRoomTypeInput')
    updateProductRoomTypeInput: UpdateProductRoomTypeInput,
  ): Promise<ProductRoomType> {
    return this.productRoomTypesService.update({
      productRoomTypeId,
      updateProductRoomTypeInput,
    });
  }
}
