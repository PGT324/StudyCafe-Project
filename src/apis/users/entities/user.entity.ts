import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Common } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class User extends Common {
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  userImage: string;

  @Field(() => String)
  @Column()
  userName: string;

  @Field(() => String)
  @Column()
  userNickname: string;

  @Field(() => String)
  @Column()
  userPhone: string;

  @Field(() => String)
  @Column()
  userPassword: string;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  userCash: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  parentPhone: string;
}
