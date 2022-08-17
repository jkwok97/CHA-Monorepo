import {
  Awards_V2,
  Goalies_Stats_V2,
  Players_Stats_V2,
} from '@cha/shared/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AwardsController } from './controllers';
import { AwardsMiddleware } from './middlewares/awards.middleware';
import { ApiAwardsService } from './services/api-awards.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Awards_V2, Players_Stats_V2, Goalies_Stats_V2]),
  ],
  controllers: [AwardsController],
  providers: [ApiAwardsService],
})
export class ApiAwardsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AwardsMiddleware).forRoutes('*');
  }
}
