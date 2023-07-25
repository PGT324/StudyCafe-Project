import { Query, Resolver } from '@nestjs/graphql';
import { FacilityService } from './facilities.service';

@Resolver()
export class FacilityResolver {
  constructor(
    private readonly facilityService: FacilityService, //
  ) {}
  @Query(() => String)
  fetchFacilities(): string {
    return this.facilityService.fetchFacilities();
  }
}
