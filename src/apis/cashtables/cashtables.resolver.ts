import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CashTableService } from './cashtables.service';
import { CreateCashTableDto } from './dto/create-cashtable.dto';

@Resolver()
export class CashTableResolver {
  constructor(
    private readonly cashTableService: CashTableService, //
  ) {}
  @Query(() => String)
  fetchCashTables(): string {
    return this.cashTableService.fetchCashTables();
  }

  @Mutation(() => String)
  createCashTable(
    @Args('input') createCashTable: CreateCashTableDto,
  ): Promise<string> {
    return this.cashTableService.createCashTable(createCashTable);
  }
}
