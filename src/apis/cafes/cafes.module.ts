import { Module } from '@nestjs/common';
import { CafesResolver } from './cafes.resolver';
import { CafesService } from './cafes.service';
import { Cafe } from './entities/cafe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cafe, //
    ]),
  ],
  providers: [CafesResolver, CafesService],
})
export class CafesModule {}
