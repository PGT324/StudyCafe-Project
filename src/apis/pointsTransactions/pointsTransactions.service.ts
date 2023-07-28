import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointTransaction, Status } from './entities/pointTransaction.entity';
import { IPointsTransactionsServiceCreate } from './interfaces/points-transactions-service.interface';
import { User } from '../users/entities/user.entity';

@Injectable()
export class PointsTransactionsService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointsTransactionsRepository: Repository<PointTransaction>,
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}

  async create({
    impUid,
    amount,
    _user,
  }: IPointsTransactionsServiceCreate): Promise<PointTransaction> {
    const pointTransaction = this.pointsTransactionsRepository.create({
      impUid: impUid,
      amount: amount,
      user: _user,
      status: Status.PAYMENT,
    });
    await this.pointsTransactionsRepository.save(pointTransaction);

    const user = await this.user.findOne({ where: { id: _user.id } });
    this.user.update({ id: _user.id }, { userCash: user.userCash + amount });

    return pointTransaction;
  }
}
