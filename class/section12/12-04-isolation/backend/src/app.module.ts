import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
import { BoardsModule } from './apis/boards/boards.module';
import { PaymentsMoudle } from './apis/payments/payments.module';
import { PointsTransactionsModule } from './apis/pointsTransactions/pointsTransactions.module';
import { ProductsModule } from './apis/products/products.module';
import { ProductsCategoriesModule } from './apis/productsCategories/productsCategories.module';
import { UsersModule } from './apis/users/users.module';

@Module({
  imports: [
    AuthModule,
    BoardsModule,
    PaymentsMoudle,
    ProductsModule,
    ProductsCategoriesModule,
    PointsTransactionsModule,
    UsersModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
      //req는 기본적으로 들어오지만 , res는 이걸 작성해야만 들어옴
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
