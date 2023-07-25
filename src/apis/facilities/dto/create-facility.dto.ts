import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateFacilityDto {
  @Field(() => String)
  facilityImage: string;

  @Field(() => String)
  facilityName: string;
}
