import { MiddlewareConsumer, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NhlController } from './controllers';
import { NhlMiddleware } from './middlewares';
import { ApiNhlService } from './services';
import { Players_Stats_V2, Teams_V2 } from '@api/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([Players_Stats_V2, Teams_V2]),
  ],
  controllers: [NhlController],
  providers: [ApiNhlService],
})
export class ApiNhlModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(NhlMiddleware).forRoutes('*');
  }
}
