import { Players_V2, Teams_V2, Transactions_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Brackets, Repository } from 'typeorm';

@Injectable()
export class ApiTransactionsService {
  constructor(
    @InjectRepository(Transactions_V2)
    private repo: Repository<Transactions_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>,
    @InjectRepository(Players_V2)
    private playersRepo: Repository<Players_V2>
  ) {}

  async getTransactionsBySeason(season: number) {
    return;
  }

  private async getTeamInfo(teamId: number) {
    return await this.teamInfoRepo.findOne({
      select: {
        id: true,
        city: true,
        teamlogo: true,
        nickname: true,
        teamcolor: true,
      },
      where: {
        id: teamId,
      },
    });
  }
}
