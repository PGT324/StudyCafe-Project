import { Module } from '@nestjs/common';
import { CashTableResolver } from './cashtables.resolver';
import { CashTableService } from './cashtables.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CashTable } from './entities/cashtable.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CashTable]), //
  ],
  providers: [CashTableResolver, CashTableService],
})
export class CashtablesModule {}
