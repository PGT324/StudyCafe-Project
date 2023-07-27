import { Field, ObjectType } from '@nestjs/graphql';
import { Cafe } from 'src/apis/cafes/entities/cafe.entity';
import { Common } from 'src/common/entities/common.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Facility extends Common {
  @Field(() => String)
  @Column()
  facilityImage: string;

  @Field(() => String)
  @Column()
  facilityName: string;

  @ManyToMany(() => Cafe, { cascade: true })
  cafe: Cafe[];
}
