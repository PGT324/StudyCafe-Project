import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCafesDto {
  @Field(() => String)
  cafeImage: string;

  @Field(() => String)
  cafeName: string;

  @Field(() => String)
  cafeAddress: string;

  @Field(() => String)
  cafeTime: string;

  @Field(() => String)
  cafeNote: string;

  @Field(() => Float)
  cafeLat: number;

  @Field(() => Float)
  cafeLon: number;

  @Field(() => String)
  cafePhone: string;

  @Field(() => Int)
  cafeSeatCount: number;
}
