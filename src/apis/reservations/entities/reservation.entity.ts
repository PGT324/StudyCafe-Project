import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Cafe } from 'src/apis/cafes/entities/cafe.entity';
import { CashTable } from 'src/apis/cashtables/entities/cashtable.entity';
import { Coupon } from 'src/apis/coupons/entities/coupon.entity';
import { User } from 'src/apis/users/entities/user.entity';
import { Common } from 'src/common/entities/common.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class Reservation extends Common {
  @ManyToOne(() => User, (user) => user.res, { onDelete: 'CASCADE' })
  @Field(() => User)
  user: User;

  @ManyToOne(() => Cafe, (cafe) => cafe.res, { onDelete: 'CASCADE' })
  @Field(() => Cafe)
  cafe: Cafe;

  @ManyToOne(() => CashTable, (cashTable) => cashTable.res, {
    onDelete: 'CASCADE',
  })
  @Field(() => CashTable)
  cashTable: CashTable;

  @ManyToOne(() => Coupon, (coupon) => coupon.res, { onDelete: 'CASCADE' })
  @Field(() => Coupon, { nullable: true })
  coupon?: Coupon;

  @Field(() => Int)
  @Column()
  totalPrice: number;

  @Field(() => Int)
  @Column()
  seatNumber: number;
}
