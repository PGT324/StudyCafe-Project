import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodosDto {
  @Field(() => String)
  content: string;
}
