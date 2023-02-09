import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainLocationsModule } from './apis/mainLocations/mainLocations.module';
// import { BoardsModule } from './apis/boards/boards.module';
import { ProductsModule } from './apis/products/products.module';
import { ProductsCategoriesModule } from './apis/productsCategories/productsCategories.module';
import { ProductRoomTypesModule } from './apis/productsRoomTypes/productRoomTypes.module';
import { SubLocationsModule } from './apis/subLocations/subLocatoms.module';

@Module({
  imports: [
    // BoardsModule,
    ProductsModule,
    SubLocationsModule,
    MainLocationsModule,
    ProductRoomTypesModule,
    ProductsCategoriesModule,
    // UsersModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATEBASE_TYPE as 'mysql',
      host: process.env.DATEBASE_HOST,
      port: Number(process.env.DATEBASE_PORT),
      username: process.env.DATEBASE_USERNAME,
      password: process.env.DATEBASE_PASSWORD,
      database: process.env.DATEBASE_DATABASE,
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}

//yarn add class-validator 검증을 하기 위한 라이브러리
//yarn add class-transformer
