import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCouponDto {
  @Field(() => String)
  couponName: string;

  @Field(() => Int)
  couponSale: number;

  @Field(() => Int)
  couponCode: number;
}
