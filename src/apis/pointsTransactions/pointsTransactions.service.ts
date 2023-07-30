import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { PointTransaction, Status } from './entities/pointTransaction.entity';
import { IPointsTransactionsServiceCreate } from './interfaces/points-transactions-service.interface';
import { User } from '../users/entities/user.entity';

@Injectable()
export class PointsTransactionsService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointsTransactionsRepository: Repository<PointTransaction>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly dataSource: DataSource,
  ) {}

  async create({
    impUid,
    amount,
    _user,
  }: IPointsTransactionsServiceCreate): Promise<PointTransaction> {
    //transaction처리
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const pointTransaction = this.pointsTransactionsRepository.create({
        impUid: impUid,
        amount: amount,
        user: _user,
        status: Status.PAYMENT,
      });
      await queryRunner.manager.save(pointTransaction);
      // await this.pointsTransactionsRepository.save(pointTransaction);

      // const user = await this.userRepository.findOne({ where: { id: _user.id } });
      const user = await queryRunner.manager.findOne(User, {
        where: { id: _user.id },
      });
      console.log(user);
      const updatedUser = this.userRepository.create({
        ...user,
        userCash: user.userCash + amount,
      });
      console.log(updatedUser);
      await queryRunner.manager.save(updatedUser);
      // this.userRepository.update({ id: _user.id }, { userCash: user.userCash + amount });
      await queryRunner.commitTransaction();

      return pointTransaction;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new Error('포인트 결제 실패!');
    } finally {
      await queryRunner.release();
    }
  }
}
