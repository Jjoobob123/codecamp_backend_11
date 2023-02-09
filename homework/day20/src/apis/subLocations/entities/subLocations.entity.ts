import { Field, ObjectType } from '@nestjs/graphql';
import { MainLocation } from 'src/apis/mainLocations/entities/mainLocations.entity';
import { Product } from 'src/apis/products/entities/product.entity';

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
@ObjectType()
export class SubLocation {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ length: 100 })
  @Field(() => String)
  name: string;

  @OneToMany(() => Product, (products) => products.subLocation)
  @Field(() => [Product])
  products: Product[];

  @ManyToOne(() => MainLocation, (mainLocation) => mainLocation.subLocation)
  @Field(() => [MainLocation])
  mainLocation: MainLocation;
}
