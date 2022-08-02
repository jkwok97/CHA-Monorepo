import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Teams_V2 } from '@cha/shared/entities';
import { TeamsController } from './controllers';
import { TeamsMiddleware } from './middlewares/teams.middleware';
import { TeamsService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Teams_V2])],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class ApiTeamsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TeamsMiddleware).forRoutes('*');
  }
}
