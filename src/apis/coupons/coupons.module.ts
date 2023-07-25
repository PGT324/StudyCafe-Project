import { Module } from '@nestjs/common';
import { CouponsResolver } from './coupons.resolver';
import { CouponsService } from './coupons.service';
import { Coupon } from './entities/coupon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Coupon, //
    ]),
  ],
  providers: [CouponsResolver, CouponsService],
})
export class CouponsModule {}
