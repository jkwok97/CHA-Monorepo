import { Schedule_V2, Teams_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleController } from './controllers';
import { ScheduleMiddleware } from './middlewares';
import { ApiScheduleService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule_V2, Teams_V2])],
  controllers: [ScheduleController],
  providers: [ApiScheduleService],
})
export class ApiScheduleModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ScheduleMiddleware).forRoutes('*');
  }
}
