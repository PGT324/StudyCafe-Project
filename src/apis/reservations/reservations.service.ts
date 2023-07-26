import { Injectable } from '@nestjs/common';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservation: Reservation, //
  ) {}
  fetchReservations() {
    return 'hi';
  }
}
