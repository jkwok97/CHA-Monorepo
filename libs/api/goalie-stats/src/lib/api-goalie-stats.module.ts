import { Goalies_Stats_V2, Teams_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoalieStatsController } from './controllers';
import { GoalieStatsMiddleware } from './middlewares';
import {
  ApiGoalieStatsService,
  ApiGoalieStatsLeadersService,
  ApiGoalieAllTimeStatsService,
} from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Goalies_Stats_V2, Teams_V2])],
  controllers: [GoalieStatsController],
  providers: [
    ApiGoalieStatsService,
    ApiGoalieStatsLeadersService,
    ApiGoalieAllTimeStatsService,
  ],
})
export class ApiGoalieStatsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GoalieStatsMiddleware).forRoutes('*');
  }
}
