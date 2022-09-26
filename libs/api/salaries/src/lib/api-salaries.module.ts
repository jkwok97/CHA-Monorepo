import {
  Goalies_Stats_V2,
  Goalie_Ratings_V2,
  Players_Stats_V2,
  Players_V2,
  Player_Ratings_V2,
  Salaries_V2,
  Teams_V2,
} from '@api/entities';
import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalariesController } from './controllers';
import { SalariesMiddleware } from './middlewares';
import { ApiSalariesService } from './services';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      Players_Stats_V2,
      Teams_V2,
      Salaries_V2,
      Player_Ratings_V2,
      Goalie_Ratings_V2,
      Goalies_Stats_V2,
      Players_V2,
    ]),
  ],
  controllers: [SalariesController],
  providers: [ApiSalariesService],
})
export class ApiSalariesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SalariesMiddleware).forRoutes('*');
  }
}
