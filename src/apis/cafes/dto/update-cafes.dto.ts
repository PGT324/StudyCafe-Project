import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateCafesDto } from './create-cafes.dto';

@InputType()
export class UpdateCafesDto extends PartialType(CreateCafesDto) {
  @Field(() => String)
  id: string;
}
