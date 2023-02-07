import { MainLocation } from 'src/apis/mainLocations/entities/mainLocations.entity';
import { Product } from 'src/apis/products/entities/products.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class SubLocation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @OneToMany(() => Product, (products) => products.subLocation)
  products: Product[];

  @ManyToOne(() => MainLocation, (mainLocation) => mainLocation.subLocation)
  mainLocation: MainLocation;
}
