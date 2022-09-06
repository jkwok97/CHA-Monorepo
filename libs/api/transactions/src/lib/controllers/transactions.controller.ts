import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiTransactionsService } from '../services';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: ApiTransactionsService) {}

  @Get('/:season')
  async getTransactionsBySeason(@Param() param): Promise<any[]> {
    const stats = await this.transactionsService.getTransactionsBySeason(
      param.season
    );

    if (!stats || stats.length < 1) {
      throw new NotFoundException('Transactions not found');
    }
    return stats;
  }
}
