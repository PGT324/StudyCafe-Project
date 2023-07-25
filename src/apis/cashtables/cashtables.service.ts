import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CashTable } from './entities/cashtable.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CashTableService {
  constructor(
    @InjectRepository(CashTable)
    private readonly cashtable: Repository<CashTable>, //
  ) {}
  fetchCashTables(): string {
    return 'hi';
  }
}
