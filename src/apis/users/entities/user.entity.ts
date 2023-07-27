import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';
import { Coupon } from 'src/apis/coupons/entities/coupon.entity';
import { Reservation } from 'src/apis/reservations/entities/reservation.entity';
import { Todo } from 'src/apis/todos/entities/todo.entity';
import { Common } from 'src/common/entities/common.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class User extends Common {
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  @IsString()
  userImage: string;

  @Field(() => String)
  @Column()
  @IsString()
  userName: string;

  @Field(() => String)
  @Column()
  @IsString()
  userNickname: string;

  @Field(() => String)
  @Column()
  @IsString()
  userPhone: string;

  @Field(() => String)
  @Column()
  @IsString()
  userPassword: string;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  @IsInt()
  userCash: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  @IsString()
  parentPhone: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  @Field(() => [Todo])
  todos: Todo[];

  @OneToMany(() => Reservation, (res) => res.user)
  res: Reservation[];

  @ManyToMany(() => Coupon)
  @JoinTable()
  @Field(() => [Coupon])
  coupon: Coupon[];
}
