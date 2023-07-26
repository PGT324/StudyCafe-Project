import { Field, ObjectType } from '@nestjs/graphql';
import { IsDate, IsString } from 'class-validator';
import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Common {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Field(() => Date)
  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;
}
