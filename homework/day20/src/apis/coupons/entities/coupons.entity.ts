import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity()
@ObjectType()
export class Coupon {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  coupon_id: string;

  @Column({ length: 100 })
  @Field(() => String)
  name: string;

  @JoinTable()
  @ManyToMany(() => User, (users) => users.user_id)
  @Field(() => [User])
  users: User[];
}
