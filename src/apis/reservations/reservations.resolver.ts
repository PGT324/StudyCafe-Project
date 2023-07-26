import { Query, Resolver } from '@nestjs/graphql';
import { ReservationsService } from './reservations.service';

@Resolver()
export class ReservationResolver {
  constructor(private readonly reservationService: ReservationsService) {}
  @Query(() => String)
  fetchReservations() {
    return this.reservationService.fetchReservations();
  }
}
