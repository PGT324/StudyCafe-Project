import { Query, Resolver } from '@nestjs/graphql';
import { CafesService } from './cafes.service';

@Resolver()
export class CafesResolver {
  constructor(
    private readonly cafesService: CafesService, //
  ) {}

  @Query(() => String)
  fetchCafes(): string {
    return this.cafesService.fetchCafes();
  }
}
