import { MiddlewareConsumer, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NhlController } from './controllers';
import { NhlMiddleware } from './middlewares';

@Module({
  controllers: [NhlController, HttpModule],
  providers: [],
  exports: [],
})
export class ApiNhlModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(NhlMiddleware).forRoutes('*');
  }
}
