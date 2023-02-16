import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductRoomImageInput } from '../dto/create-productsroomlmage.input';
import { UpdateProductRoomImageInput } from '../dto/update-productsroomlmage.input';
import { ProductRoomImage } from '../entities/productsRoomImages.entity';
import { ProductRoomImagesSerivce } from './productRoomlmages.service';

@Resolver()
export class ProductRoomImagesResolver {
  constructor(
    private readonly productRoomImagesSerivce: ProductRoomImagesSerivce,
  ) {}

  @Query(() => [ProductRoomImage])
  fetchRoomImages(): Promise<ProductRoomImage[]> {
    return this.productRoomImagesSerivce.findAll();
  }

  @Query(() => ProductRoomImage)
  fetchRoomImage(
    @Args('ProductRoomImagesId') productRoomImageId: string, //
  ): Promise<ProductRoomImage> {
    return this.productRoomImagesSerivce.findOne({ productRoomImageId });
  }

  @Mutation(() => ProductRoomImage)
  createProductRoomImage(
    @Args('createProductRoomImageInput') //
    createProductRoomImageInput: CreateProductRoomImageInput, //
  ): Promise<ProductRoomImage> {
    return this.productRoomImagesSerivce.create({
      createProductRoomImageInput,
    });
  }

  @Mutation(() => ProductRoomImage)
  updateProductRoomImage(
    @Args('productRoomImageId') productRoomImageId: string,
    @Args('updateProductRoomImageInput')
    updateProductRoomImageInput: UpdateProductRoomImageInput,
  ): Promise<ProductRoomImage> {
    return this.productRoomImagesSerivce.update({
      productRoomImageId,
      updateProductRoomImageInput,
    });
  }
}
