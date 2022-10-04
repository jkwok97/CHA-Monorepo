import { Players_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerInfoController } from './controllers';
import { PlayerInfoMiddleware } from './middlewares';
import { ApiPlayerInfoService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Players_V2])],
  controllers: [PlayerInfoController],
  providers: [ApiPlayerInfoService],
})
export class ApiPlayerInfoModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PlayerInfoMiddleware).forRoutes('*');
  }
}
