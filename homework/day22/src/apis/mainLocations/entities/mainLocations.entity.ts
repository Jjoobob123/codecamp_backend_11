import { Field, ObjectType } from '@nestjs/graphql';
import { SubLocation } from 'src/apis/subLocations/entities/subLocations.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class MainLocation {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ length: 100 })
  @Field(() => String)
  name: string;

  @OneToMany(() => SubLocation, (subLocation) => subLocation.mainLocation)
  @Field(() => [SubLocation])
  subLocation: SubLocation[];
}
