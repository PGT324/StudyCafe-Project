import { Injectable } from '@nestjs/common';
import { Cafe } from './entities/cafe.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCafesDto } from './dto/create-cafes.dto';
import { Facility } from '../facilities/entities/facility.entity';

@Injectable()
export class CafesService {
  constructor(
    @InjectRepository(Cafe)
    private readonly cafe: Repository<Cafe>,
    @InjectRepository(Facility)
    private readonly facility: Repository<Facility>, //
  ) {}
  fetchCafes(): string {
    return 'hi';
  }

  async createCafe(createCafeDto: CreateCafesDto): Promise<string> {
    const result = await this.cafe.save(createCafeDto);
    if (result) {
      return '카페 등록 성공!';
    } else {
      return '카페 등록 실패!';
    }
  }

  async addFacility(cafeId: string, facilityId: string): Promise<string> {
    const facility = await this.facility.findOne({ where: { id: facilityId } });
    const cafe = await this.cafe.findOne({ where: { id: cafeId } });
    cafe.facility = [facility];
    const result = await this.cafe.save({
      id: cafe.id,
      ...cafe,
    });
    if (result) {
      return '카페에 시설이 등록되었습니다!';
    } else {
      return '카페에 시설등록이 실패하였습니다.';
    }
  }
}
