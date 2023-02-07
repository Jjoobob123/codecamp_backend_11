import { SubLocation } from 'src/apis/subLocations/entities/subLocations.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MainLocation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @OneToMany(() => SubLocation, (subLocation) => subLocation.mainLocation)
  subLocation: SubLocation;
}
