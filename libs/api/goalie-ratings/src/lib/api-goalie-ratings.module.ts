import { Goalie_Ratings_V2, Players_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoalieRatingsController } from './controllers';
import { GoalieRatingsMiddleware } from './middlewares';
import { ApiGoalieRatingsService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Goalie_Ratings_V2, Players_V2])],
  controllers: [GoalieRatingsController],
  providers: [ApiGoalieRatingsService],
})
export class ApiGoalieRatingsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GoalieRatingsMiddleware).forRoutes('*');
  }
}
