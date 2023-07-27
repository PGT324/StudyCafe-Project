import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Facility } from './entities/facility.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFacilityDto } from './dto/create-facility.dto';

@Injectable()
export class FacilityService {
  constructor(
    @InjectRepository(Facility)
    private readonly facility: Repository<Facility>, //
  ) {}
  fetchFacilities(): string {
    return 'hi';
  }

  async createFacility(createFacilityDto: CreateFacilityDto): Promise<string> {
    const result = await this.facility.save(createFacilityDto);
    if (result) {
      return '시설 등록 성공!';
    } else {
      return '시설 등록 실패!';
    }
  }
}
