import { Conferences_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConferencesController } from './controllers';
import { ConferencesMiddleware } from './middlewares';
import { ApiConferencesService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Conferences_V2])],
  controllers: [ConferencesController],
  providers: [ApiConferencesService],
})
export class ApiConferencesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ConferencesMiddleware).forRoutes('*');
  }
}
