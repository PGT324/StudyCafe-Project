import { Query, Resolver } from '@nestjs/graphql';
import { CashTableService } from './cashtables.service';

@Resolver()
export class CashTableResolver {
  constructor(
    private readonly cashTableService: CashTableService, //
  ) {}
  @Query(() => String)
  fetchCashTables(): string {
    return this.cashTableService.fetchCashTables();
  }
}
