import { IAuthUser } from 'src/auth/interfaces/auth.interface';

export interface IPointsTransactionsServiceCreate {
  impUid: string;
  amount: number;
  _user: IAuthUser['user'];
}
