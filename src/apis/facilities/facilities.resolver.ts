import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FacilityService } from './facilities.service';
import { CreateFacilityDto } from './dto/create-facility.dto';

@Resolver()
export class FacilityResolver {
  constructor(
    private readonly facilityService: FacilityService, //
  ) {}
  @Query(() => String)
  fetchFacilities(): string {
    return this.facilityService.fetchFacilities();
  }

  @Mutation(() => String)
  createFacility(
    @Args('input') createFacilityDto: CreateFacilityDto,
  ): Promise<string> {
    return this.facilityService.createFacility(createFacilityDto);
  }
}
