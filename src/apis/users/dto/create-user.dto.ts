import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field(() => String)
  userName: string;

  @Field(() => String)
  userNickname: string;

  @Field(() => String)
  userPhone: string;

  @Field(() => String)
  userPassword: string;
}
