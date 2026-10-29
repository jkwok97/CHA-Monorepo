import { Players_V2, Teams_V2, Transactions_V2 } from '@api/entities';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, In, Repository } from 'typeorm';

const TEAM_SELECT = {
  id: true,
  city: true,
  teamlogo: true,
  nickname: true,
  teamcolor: true,
  teamtextcolor: true,
} as const;

const PLAYER_SELECT = {
  id: true,
  firstname: true,
  lastname: true,
  nhl_id: true,
} as const;

const SEASON_DATES: Record<string, { start: string; end: string }> = {
  '27': { start: '2026-06-02', end: '2027-06-01' },
  '26': { start: '2025-06-02', end: '2026-06-01' },
  '25': { start: '2024-06-02', end: '2025-06-01' },
  '24': { start: '2023-06-02', end: '2024-06-01' },
  '23': { start: '2022-06-02', end: '2023-06-01' },
  '22': { start: '2021-07-15', end: '2022-06-01' },
  '21': { start: '2020-04-27', end: '2021-07-15' },
};

@Injectable()
export class ApiTransactionsService {
  constructor(
    @InjectRepository(Transactions_V2)
    private readonly repo: Repository<Transactions_V2>,
    @InjectRepository(Teams_V2)
    private readonly teamInfoRepo: Repository<Teams_V2>,
    @InjectRepository(Players_V2)
    private readonly playersRepo: Repository<Players_V2>
  ) {}

  async getAllTransactions() {
    const transactions = await this.repo.find({
      order: {
        transaction_date: 'DESC',
      },
    });

    return this.enrichTransactions(transactions);
  }

  async getTransactionsBySeason(year: string) {
    const season = SEASON_DATES[year];
    if (!season) {
      throw new BadRequestException(`Season key '${year}' not found`);
    }

    const transactions = await this.repo.find({
      where: {
        transaction_date: Between(new Date(season.start), new Date(season.end)),
      },
      order: {
        transaction_date: 'DESC',
      },
    });

    return this.enrichTransactions(transactions);
  }

  async updateTradeById(id: number, attrs: Partial<Transactions_V2>) {
    const trade = await this.repo.findOneBy({ id });

    if (!trade) {
      throw new NotFoundException(`Trade with id ${id} not found`);
    }

    Object.assign(trade, attrs);
    return this.repo.save(trade);
  }

  private async enrichTransactions(transactions: Transactions_V2[]) {
    if (transactions.length === 0) return [];

    const teamIds = new Set<number>();
    const playerIds = new Set<number>();

    for (const t of transactions) {
      if (t.team_one_id) teamIds.add(Number(t.team_one_id));
      if (t.team_two_id) teamIds.add(Number(t.team_two_id));

      if (Array.isArray(t.team_one_players)) {
        for (const pid of t.team_one_players) {
          if (pid) playerIds.add(Number(pid));
        }
      }

      if (Array.isArray(t.team_two_players)) {
        for (const pid of t.team_two_players) {
          if (pid) playerIds.add(Number(pid));
        }
      }
    }

    const [teamMap, playerMap] = await Promise.all([
      this.getTeamsMap(Array.from(teamIds)),
      this.getPlayersMap(Array.from(playerIds)),
    ]);

    return transactions.map((t) => ({
      id: t.id,
      transactionDate: t.transaction_date,
      teamOneInfo: teamMap.get(Number(t.team_one_id)) ?? null,
      teamOnePlayers: (t.team_one_players || []).map((pid) => ({
        player: playerMap.get(Number(pid)) ?? null,
      })),
      teamOnePicks: t.team_one_picks,
      teamTwoInfo: teamMap.get(Number(t.team_two_id)) ?? null,
      teamTwoPlayers: (t.team_two_players || []).map((pid) => ({
        player: playerMap.get(Number(pid)) ?? null,
      })),
      teamTwoPicks: t.team_two_picks,
    }));
  }

  private async getTeamsMap(teamIds: number[]) {
    if (teamIds.length === 0) {
      return new Map<number, Teams_V2>();
    }

    const teams = await this.teamInfoRepo.find({
      select: TEAM_SELECT,
      where: { id: In(teamIds) },
    });

    return new Map(teams.map((t) => [t.id, t]));
  }

  private async getPlayersMap(playerIds: number[]) {
    if (playerIds.length === 0) {
      return new Map<number, Players_V2>();
    }

    const players = await this.playersRepo.find({
      select: PLAYER_SELECT,
      where: { id: In(playerIds) },
    });

    return new Map(players.map((p) => [p.id, p]));
  }
}
