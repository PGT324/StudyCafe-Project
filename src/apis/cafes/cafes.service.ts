import { Injectable } from '@nestjs/common';
import { Cafe } from './entities/cafe.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CafesService {
  constructor(
    @InjectRepository(Cafe)
    private readonly cafe: Repository<Cafe>, //
  ) {}
  fetchCafes(): string {
    return 'hi';
  }
}
