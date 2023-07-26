import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Reservation } from 'src/apis/reservations/entities/reservation.entity';
import { Common } from 'src/common/entities/common.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Cafe extends Common {
  @Field(() => String)
  @Column()
  cafeImage: string;

  @Field(() => String)
  @Column()
  cafeName: string;

  @Field(() => String)
  @Column()
  cafeAddress: string;

  @Field(() => String)
  @Column()
  cafeTime: string;

  @Field(() => String)
  @Column()
  cafeNote: string;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 9, scale: 6 })
  cafeLat: number;

  @Field(() => Float)
  @Column({ type: 'decimal', precision: 9, scale: 6 })
  cafeLon: number;

  @Field(() => String)
  @Column()
  cafePhone: string;

  @Field(() => Int)
  @Column()
  cafeSeatCount: number;

  @OneToMany(() => Reservation, (res) => res.cafe)
  res: Reservation[];
}
