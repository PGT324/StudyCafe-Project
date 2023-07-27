import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFacilityDto {
  @Field(() => String)
  facilityImage: string;

  @Field(() => String)
  facilityName: string;
}
