import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateReservationDto {
  @Field(() => Int)
  seatNumber: number;
}
