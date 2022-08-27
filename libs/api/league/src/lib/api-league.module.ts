import { Current_Season_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeagueController } from './controllers';
import { LeagueMiddleware } from './middlewares/league.middleware';
import { LeagueService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Current_Season_V2])],
  controllers: [LeagueController],
  providers: [LeagueService],
})
export class ApiLeagueModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LeagueMiddleware).forRoutes('*');
  }
}
