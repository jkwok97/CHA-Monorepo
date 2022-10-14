import { Player_Ratings_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRatingsController } from './controllers';
import { PlayerRatingsMiddleware } from './middlewares';
import { ApiPlayerRatingsService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Player_Ratings_V2])],
  controllers: [PlayerRatingsController],
  providers: [ApiPlayerRatingsService],
})
export class ApiPlayerRatingsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PlayerRatingsMiddleware).forRoutes('*');
  }
}
