import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './apis/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CafesModule } from './apis/cafes/cafes.module';
import { CouponsModule } from './apis/coupons/coupons.module';
import { FacilitiesModule } from './apis/facilities/facilities.module';
import { CashtablesModule } from './apis/cashtables/cashtables.module';
import { TodosModule } from './apis/todos/todos.module';
import { Reservation } from './apis/reservations/entities/reservation.entity';
import { AuthModule } from './auth/auth.module';
import { PointsTransactionsModule } from './apis/pointsTransactions/pointsTransactions.module';

@Module({
  imports: [
    UsersModule,
    CafesModule,
    CouponsModule,
    FacilitiesModule,
    CashtablesModule,
    TodosModule,
    Reservation,
    PointsTransactionsModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
      context: ({ req, res }) => {
        return { req, res };
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/apis/**/*.entity.*'],
      logging: true,
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
