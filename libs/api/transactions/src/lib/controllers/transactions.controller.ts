import { GetTeamTransactionDto } from '@cha/shared/entities';
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

  @Get('team/:team/:season')
  async getTeam(@Param() param): Promise<GetTeamTransactionDto> {
    const team = await this.transactionsService.getTeamBySeason(
      param.team,
      param.season
    );

    if (!team) {
      throw new NotFoundException('Team not found');
    }
    return team;
  }
}
