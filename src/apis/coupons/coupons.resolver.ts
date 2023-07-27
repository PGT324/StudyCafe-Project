import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';

@Resolver()
export class CouponsResolver {
  constructor(
    private readonly couponsService: CouponsService, //
  ) {}
  @Query(() => String)
  fetchCoupons(): string {
    return this.couponsService.fetchCoupons();
  }

  @Mutation(() => String)
  createCoupon(
    @Args('input') createCouponDto: CreateCouponDto,
  ): Promise<string> {
    return this.couponsService.createCoupon(createCouponDto);
  }
}
