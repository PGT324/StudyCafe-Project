import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './apis/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './apis/users/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { CafesModule } from './apis/cafes/cafes.module';
import { Cafe } from './apis/cafes/entities/cafe.entity';
import { CouponsModule } from './apis/coupons/coupons.module';
import { Coupon } from './apis/coupons/entities/coupon.entity';
import { FacilitiesModule } from './apis/facilities/facilities.module';
import { Facility } from './apis/facilities/entities/facility.entity';
import { CashTable } from './apis/cashtables/entities/cashtable.entity';
import { CashtablesModule } from './apis/cashtables/cashtables.module';

@Module({
  imports: [
    UsersModule,
    CafesModule,
    CouponsModule,
    FacilitiesModule,
    CashtablesModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/common/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        User,
        Cafe,
        Coupon,
        Facility,
        CashTable, //
      ],
      logging: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
