import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Reservation } from 'src/apis/reservations/entities/reservation.entity';
import { User } from 'src/apis/users/entities/user.entity';
import { Common } from 'src/common/entities/common.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Coupon extends Common {
  @Field(() => String)
  @Column()
  couponName: string;

  @Field(() => Int)
  @Column()
  couponSale: number;

  @Field(() => Int)
  @Column()
  couponCode: number;

  @OneToMany(() => Reservation, (res) => res.coupon)
  res: Reservation[];

  @ManyToMany(() => User, { cascade: true })
  @Field(() => [User])
  user: User[];
}
