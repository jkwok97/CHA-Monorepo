import { Module } from '@nestjs/common';
import { TransactionsController } from './controllers';

@Module({
  controllers: [TransactionsController],
  providers: [],
  exports: [],
})
export class ApiTransactionsModule {}
