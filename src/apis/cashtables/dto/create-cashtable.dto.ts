import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateCashTableDto {
  @Field(() => String)
  cashName: string;

  @Field(() => Int)
  cashPrice: number;

  @Field(() => Int)
  cashTime: number;
}
