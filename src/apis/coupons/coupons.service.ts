import { Injectable } from '@nestjs/common';
import { Coupon } from './entities/coupon.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCouponDto } from './dto/create-coupon.dto';

@Injectable()
export class CouponsService {
  constructor(
    @InjectRepository(Coupon)
    private readonly couponRepository: Repository<Coupon>, //
  ) {}
  async fetchCoupons(): Promise<Coupon[]> {
    return await this.couponRepository.find();
  }

  async createCoupon(createCouponDto: CreateCouponDto): Promise<string> {
    const result = await this.couponRepository.save(createCouponDto);
    if (result) {
      return '쿠폰 생성 성공!';
    } else {
      return '쿠폰 생성 실패!';
    }
  }
}
