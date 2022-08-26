import { Team_Stats_V2 } from '@cha/shared/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamStatsController } from './controllers';
import { TeamStatsMiddleware } from './middlewares';
import { ApiTeamStatsService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Team_Stats_V2])],
  controllers: [TeamStatsController],
  providers: [ApiTeamStatsService],
})
export class ApiTeamStatsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TeamStatsMiddleware).forRoutes('*');
  }
}
