import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
import { JwtAccessStrategy } from './apis/auth/strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './apis/auth/strategies/jwt-refresh.strategy';
import { JwtGoogleStrategy } from './apis/auth/strategies/jwt-social.google.strategy';
import { JwtKakaoStrategy } from './apis/auth/strategies/jwt-social.kakao.strategy';
import { JwtNaverStrategy } from './apis/auth/strategies/jwt-social.naver.strategy';
import { FilesModule } from './apis/files/files.module';
import { MainLocationsModule } from './apis/mainLocations/mainLocations.module';
import { PaymentsModule } from './apis/payments/payments.module';
// import { BoardsModule } from './apis/boards/boards.module';
import { ProductsModule } from './apis/products/products.module';
import { ProductsCategoriesModule } from './apis/productsCategories/productsCategories.module';
import { ProductRoomImagesModule } from './apis/productsRoomImages/productRoomimage.module';

import { ProductRoomTypesModule } from './apis/productsRoomTypes/productRoomTypes.module';
import { SubLocationsModule } from './apis/subLocations/subLocatoms.module';
import { UsersModule } from './apis/users/users.module';

@Module({
  imports: [
    PaymentsModule,
    AuthModule,
    // BoardsModule,
    FilesModule,
    ProductRoomImagesModule,
    ProductsModule,
    SubLocationsModule,
    MainLocationsModule,
    ProductRoomTypesModule,
    ProductsCategoriesModule,
    UsersModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
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
  providers: [
    JwtRefreshStrategy, //
    JwtAccessStrategy,
    JwtGoogleStrategy,
    JwtNaverStrategy,
    JwtKakaoStrategy,
  ],
})
export class AppModule {}

//yarn add class-validator 검증을 하기 위한 라이브러리
//yarn add class-transformer
