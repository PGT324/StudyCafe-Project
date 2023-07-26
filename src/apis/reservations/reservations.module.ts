import { Module } from '@nestjs/common';
import { ReservationResolver } from './reservations.resolver';
import { ReservationsService } from './reservations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Reservation, //
    ]),
  ],
  providers: [ReservationResolver, ReservationsService],
})
export class ReservationModule {}
