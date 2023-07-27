import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CafesService } from './cafes.service';
import { CreateCafesDto } from './dto/create-cafes.dto';

@Resolver()
export class CafesResolver {
  constructor(
    private readonly cafesService: CafesService, //
  ) {}

  @Query(() => String)
  fetchCafes(): string {
    return this.cafesService.fetchCafes();
  }

  @Mutation(() => String)
  createCafe(@Args('input') createCafeDto: CreateCafesDto): Promise<string> {
    return this.cafesService.createCafe(createCafeDto);
  }

  @Mutation(() => String)
  addFacility(
    @Args('cafeId') cafeId: string,
    @Args('facilityId') facilityId: string,
  ): Promise<string> {
    return this.cafesService.addFacility(cafeId, facilityId);
  }
}
