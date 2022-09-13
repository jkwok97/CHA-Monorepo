import { Teams_V2, Waivers_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaiversController } from './controllers';
import { WaiversMiddleware } from './middlewares';
import { ApiWaiversService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Waivers_V2, Teams_V2])],
  controllers: [WaiversController],
  providers: [ApiWaiversService],
})
export class ApiWaiversModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(WaiversMiddleware).forRoutes('*');
  }
}
