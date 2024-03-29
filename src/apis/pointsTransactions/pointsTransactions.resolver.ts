import { UseGuards } from '@nestjs/common';
import { Args, Context, Int, Mutation, Resolver } from '@nestjs/graphql';
import { PointTransaction } from './entities/pointTransaction.entity';
import { PointsTransactionsService } from './pointsTransactions.service';
import { GqlAuthGuard } from 'src/auth/guards/auth.guard';
import { IContext } from 'src/auth/interfaces/auth.interface';

@Resolver()
export class PointsTransactionsResolver {
  constructor(
    private readonly pointsTransactionsService: PointsTransactionsService,
  ) {}

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => PointTransaction)
  createPointTransaction(
    @Args('impUid') impUid: string,
    @Args({ name: 'amount', type: () => Int }) amount: number,
    @Context() context: IContext, //
  ): Promise<PointTransaction> {
    const _user = context.req.user;
    return this.pointsTransactionsService.create({ impUid, amount, _user });
  }
}
