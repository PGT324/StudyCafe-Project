import { Query, Resolver } from '@nestjs/graphql';
import { ReservationsService } from './reservations.service';
import { Reservation } from './entities/reservation.entity';

@Resolver()
export class ReservationResolver {
  constructor(private readonly reservationService: ReservationsService) {}
  @Query(() => [Reservation])
  fetchReservations(): Promise<Reservation[]> {
    return this.reservationService.fetchReservations();
  }
}
