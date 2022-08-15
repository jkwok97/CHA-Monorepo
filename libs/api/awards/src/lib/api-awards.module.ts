import { Awards_V2 } from '@cha/shared/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AwardsController } from './controllers';
import { AwardsMiddleware } from './middlewares';
import { AwardsService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Awards_V2])],
  controllers: [AwardsController],
  providers: [AwardsService],
})
export class ApiAwardsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AwardsMiddleware).forRoutes('*');
  }
}
