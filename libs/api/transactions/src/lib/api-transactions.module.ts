import { Players_V2, Schedule_V2, Teams_V2 } from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsController } from './controllers';
import { TransactionsMiddleware } from './middlewares';
import { ApiTransactionsService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule_V2, Teams_V2, Players_V2])],
  controllers: [TransactionsController],
  providers: [ApiTransactionsService],
})
export class ApiTransactionsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TransactionsMiddleware).forRoutes('*');
  }
}
