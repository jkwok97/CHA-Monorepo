import {
  Draft_Order_V2,
  Goalies_Stats_V2,
  Players_Stats_V2,
  Players_V2,
  Teams_V2,
  Transactions_V2,
} from '@api/entities';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsController } from './controllers';
import { TransactionsMiddleware } from './middlewares';
import {
  ApiTransactionsService,
  ApiTransactionsTradesService,
} from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Transactions_V2,
      Teams_V2,
      Players_V2,
      Players_Stats_V2,
      Goalies_Stats_V2,
      Draft_Order_V2,
    ]),
  ],
  controllers: [TransactionsController],
  providers: [ApiTransactionsService, ApiTransactionsTradesService],
})
export class ApiTransactionsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TransactionsMiddleware).forRoutes('*');
  }
}
