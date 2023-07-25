import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Facility } from './entities/facility.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FacilityService {
  constructor(
    @InjectRepository(Facility)
    private readonly facility: Repository<Facility>, //
  ) {}
  fetchFacilities(): string {
    return 'hi';
  }
}
