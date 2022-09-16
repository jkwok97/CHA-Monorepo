import { Team_Stats_V2, Teams_V2, Conferences_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamStatsController } from './controllers';
import { TeamStatsMiddleware } from './middlewares';
import {
  ApiAllTimeTeamStatsService,
  ApiTeamStatsService,
  ApiUserTeamStatsService,
} from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([Team_Stats_V2, Teams_V2, Conferences_V2]),
  ],
  controllers: [TeamStatsController],
  providers: [
    ApiTeamStatsService,
    ApiAllTimeTeamStatsService,
    ApiUserTeamStatsService,
  ],
})
export class ApiTeamStatsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TeamStatsMiddleware).forRoutes('*');
  }
}
