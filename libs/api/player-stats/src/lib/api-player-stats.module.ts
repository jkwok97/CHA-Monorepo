import { Players_Stats_V2, Teams_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerStatsController } from './controllers';
import { PlayerStatsMiddleware } from './middlewares';
import {
  ApiPlayerAllTimeStatsService,
  ApiPlayerLeadersStatsService,
  ApiPlayerStatsService,
  ApiUserPlayerStatsService,
} from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Players_Stats_V2, Teams_V2])],
  controllers: [PlayerStatsController],
  providers: [
    ApiPlayerStatsService,
    ApiPlayerLeadersStatsService,
    ApiPlayerAllTimeStatsService,
    ApiUserPlayerStatsService,
  ],
})
export class ApiPlayerStatsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PlayerStatsMiddleware).forRoutes('*');
  }
}
