import { Injectable } from '@nestjs/common';
import { Reservation } from './entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>, //
  ) {}
  async fetchReservations(): Promise<Reservation[]> {
    return await this.reservationRepository.find();
  }
}
