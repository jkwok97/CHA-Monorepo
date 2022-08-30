import { Players_Stats_V2, Teams_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiPlayerStatsService {
  constructor(
    @InjectRepository(Players_Stats_V2)
    private repo: Repository<Players_Stats_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>
  ) {}

  async getAllStats(season: string, seasonType: 'Regular' | 'Playoffs') {
    const allStats = await this.repo.find({
      select: {
        id: true,
        team_name: true,
        position: true,
        games_played: true,
        goals: true,
        assists: true,
        points: true,
        plus_minus: true,
        penalty_minutes: true,
        pp_goals: true,
        sh_goals: true,
        gw_goals: true,
        gt_goals: true,
        shots: true,
        shooting_pct: true,
        minutes_per_game: true,
        fo_pct: true,
        pass_pct: true,
        corner_pct: true,
        hits: true,
        blocked_shots: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isdefense: true,
          isforward: true,
        },
      },
      relations: ['player_id'],
      where: {
        playing_year: season,
        season_type: seasonType,
      },
      order: {
        points: 'DESC',
      },
    });

    const allStatsWithTeamInfo = await this.setTeamInfo(allStats);

    return allStatsWithTeamInfo;
  }

  private async setTeamInfo(array: Players_Stats_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        teamInfo: await this.getTeamInfo(item.team_name),
      }))
    );
  }

  private async getTeamInfo(teamName: string) {
    return await this.teamInfoRepo.findOne({
      select: {
        id: true,
        city: true,
        teamlogo: true,
        nickname: true,
      },
      where: {
        shortname: teamName,
      },
    });
  }
}
