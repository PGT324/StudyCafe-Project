import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Common } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class CashTable extends Common {
  @Field(() => String)
  @Column()
  cashName: string;

  @Field(() => Int)
  @Column()
  cashPrice: number;

  @Field(() => Int)
  @Column()
  cashTime: number;
}
