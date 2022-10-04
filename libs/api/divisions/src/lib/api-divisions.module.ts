import { Divisions_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DivisionsController } from './controllers';
import { DivisionsMiddleware } from './middlewares';
import { ApiDivisionsService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Divisions_V2])],
  controllers: [DivisionsController],
  providers: [ApiDivisionsService],
})
export class ApiDivisionsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DivisionsMiddleware).forRoutes('*');
  }
}
