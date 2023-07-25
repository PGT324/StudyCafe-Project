import { Query, Resolver } from '@nestjs/graphql';
import { CouponsService } from './coupons.service';

@Resolver()
export class CouponsResolver {
  constructor(
    private readonly couponsService: CouponsService, //
  ) {}
  @Query(() => String)
  fetchCoupons(): string {
    return this.couponsService.fetchCoupons();
  }
}
