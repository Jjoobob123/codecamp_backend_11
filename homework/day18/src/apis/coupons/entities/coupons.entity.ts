import { User } from 'src/apis/users/entities/users.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn('uuid')
  coupon_id: string;

  @Column({ length: 100 })
  name: string;

  @JoinTable()
  @ManyToMany(() => User, (users) => users.user_id)
  users: User[];
}
