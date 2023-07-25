import { Module } from '@nestjs/common';
import { FacilityResolver } from './facilities.resolver';
import { FacilityService } from './facilities.service';
import { Facility } from './entities/facility.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Facility, //
    ]),
  ],
  providers: [FacilityResolver, FacilityService],
})
export class FacilitiesModule {}
