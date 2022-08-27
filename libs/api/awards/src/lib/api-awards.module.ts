import {
  Awards_V2,
  Players_Stats_V2,
  Goalies_Stats_V2,
  Team_Stats_V2,
} from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AwardsController } from './controllers';
import { AwardsMiddleware } from './middlewares';
import { ApiAwardsService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Awards_V2,
      Players_Stats_V2,
      Goalies_Stats_V2,
      Team_Stats_V2,
    ]),
  ],
  controllers: [AwardsController],
  providers: [ApiAwardsService],
})
export class ApiAwardsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AwardsMiddleware).forRoutes('*');
  }
}
