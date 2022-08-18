import { Draft_Order_V2 } from '@cha/shared/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DraftTableController } from './controllers';
import { DraftTableMiddleware } from './middlewares';
import { ApiDraftTableService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Draft_Order_V2])],
  controllers: [DraftTableController],
  providers: [ApiDraftTableService],
})
export class ApiDraftTableModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DraftTableMiddleware).forRoutes('*');
  }
}
