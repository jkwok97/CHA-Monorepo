import { MiddlewareConsumer, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NhlController } from './controllers';
import { NhlMiddleware } from './middlewares';
import { ApiNhlService } from './services';

@Module({
  imports: [HttpModule],
  controllers: [NhlController],
  providers: [ApiNhlService],
})
export class ApiNhlModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(NhlMiddleware).forRoutes('*');
  }
}
