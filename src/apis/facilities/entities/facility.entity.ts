import { Field, ObjectType } from '@nestjs/graphql';
import { Common } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class Facility extends Common {
  @Field(() => String)
  @Column()
  facilityImage: string;

  @Field(() => String)
  @Column()
  facilityName: string;
}
