import { GetTeamTransactionDto, WaiverAcquisitionDto } from '@cha/shared/entities';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
import {
  ApiTransactionsService,
  ApiTransactionsTradesService,
} from '../services';

@Controller('transactions')
export class TransactionsController {
  constructor(
    private transactionsService: ApiTransactionsService,
    private transactionsTradesService: ApiTransactionsTradesService
  ) {}

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

  @Get('team/:team/:season/:draftYear')
  async getTeam(@Param() param): Promise<GetTeamTransactionDto> {
    const team = await this.transactionsTradesService.getTeamBySeason(
      param.team,
      param.season,
      param.draftYear
    );

    if (!team) {
      throw new NotFoundException('Team not found');
    }
    return team;
  }

  @Put('/waivers/acquire')
  waiverAcquire(@Body() body: WaiverAcquisitionDto): Promise<void> {
    return this.transactionsTradesService.waiverAcquire(body);
  }

  @Put('/waivers/release')
  waiverRelease(@Body() body: WaiverAcquisitionDto): Promise<void> {
    return this.transactionsTradesService.waiverRelease(body);
  }

  @Put('/trade')
  trade(@Body() body): Promise<void> {
    return this.transactionsTradesService.trade(body);
  }
}
