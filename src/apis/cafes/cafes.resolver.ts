import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CafesService } from './cafes.service';
import { CreateCafesDto } from './dto/create-cafes.dto';
import { UpdateCafesDto } from './dto/update-cafes.dto';
import { Cafe } from './entities/cafe.entity';

@Resolver()
export class CafesResolver {
  constructor(
    private readonly cafesService: CafesService, //
  ) {}

  @Query(() => [Cafe])
  fetchCafes(): Promise<Cafe[]> {
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

  @Mutation(() => String)
  updateCafe(@Args('input') updateCafeDto: UpdateCafesDto): Promise<string> {
    return this.cafesService.updateCafe(updateCafeDto);
  }

  @Mutation(() => String)
  deleteCafe(@Args('id') id: string): Promise<string> {
    return this.cafesService.deleteCafe(id);
  }
}
