import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Common } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

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
}
