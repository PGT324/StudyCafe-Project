import { Injectable } from '@nestjs/common';
import { Coupon } from './entities/coupon.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CouponsService {
  constructor(
    @InjectRepository(Coupon)
    private readonly coupon: Repository<Coupon>, //
  ) {}
  fetchCoupons(): string {
    return 'hi';
  }
}
