import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FacilityService } from './facilities.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { Facility } from './entities/facility.entity';

@Resolver()
export class FacilityResolver {
  constructor(
    private readonly facilityService: FacilityService, //
  ) {}
  @Query(() => [Facility])
  async fetchFacilities(): Promise<Facility[]> {
    return await this.facilityService.fetchFacilities();
  }

  @Mutation(() => String)
  createFacility(
    @Args('input') createFacilityDto: CreateFacilityDto,
  ): Promise<string> {
    return this.facilityService.createFacility(createFacilityDto);
  }
}
