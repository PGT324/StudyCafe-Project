import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CashTable } from './entities/cashtable.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCashTableDto } from './dto/create-cashtable.dto';

@Injectable()
export class CashTableService {
  constructor(
    @InjectRepository(CashTable)
    private readonly cashtableRepository: Repository<CashTable>, //
  ) {}
  async fetchCashTables(): Promise<CashTable[]> {
    return await this.cashtableRepository.find();
  }

  async createCashTable(createCashTable: CreateCashTableDto): Promise<string> {
    const result = await this.cashtableRepository.save(createCashTable);
    if (result) {
      return '가격표 입력 성공!';
    } else {
      return '가격표 입력 실패!';
    }
  }
}
