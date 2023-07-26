import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Reservation } from 'src/apis/reservations/entities/reservation.entity';
import { Common } from 'src/common/entities/common.entity';
import { Column, Entity, OneToMany } from 'typeorm';

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

  @OneToMany(() => Reservation, (res) => res.cashTable)
  res: Reservation[];
}
