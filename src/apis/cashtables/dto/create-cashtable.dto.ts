import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCashTableDto {
  @Field(() => String)
  cashName: string;

  @Field(() => Int)
  cashPrice: number;

  @Field(() => Int)
  cashTime: number;
}
