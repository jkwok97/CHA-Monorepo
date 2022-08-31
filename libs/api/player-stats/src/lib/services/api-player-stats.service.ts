import { Players_Stats_V2, Teams_V2 } from '@api/entities';
import { StatPlayerAllDto } from '@cha/shared/entities';
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
        minutes_played: true,
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

    const allStatsWithTeamInfoConverted = await this.setTeamInfo(
      allStatsWithTeamInfo
    );

    console.log(allStatsWithTeamInfoConverted[0]);

    return allStatsWithTeamInfoConverted;
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

  private async convertStats(array: Players_Stats_V2[]) {
    return await Promise.all(
      array.map((stat: Players_Stats_V2) => ({
        ...stat,
        games_played: Number(stat.games_played),
        goals: Number(stat.goals),
        assists: Number(stat.assists),
        points: Number(stat.points),
        plus_minus: Number(stat.plus_minus),
        penalty_minutes: Number(stat.penalty_minutes),
        pp_goals: Number(stat.pp_goals),
        sh_goals: Number(stat.sh_goals),
        gw_goals: Number(stat.gw_goals),
        gt_goals: Number(stat.gt_goals),
        shots: Number(stat.shots),
        shooting_pct: Number(stat.shooting_pct),
        minutes_played: Number(stat.minutes_played),
        minutes_per_game: Number(stat.minutes_per_game),
        fo_pct: Number(stat.fo_pct),
        pass_pct: Number(stat.pass_pct),
        corner_pct: Number(stat.corner_pct),
        hits: Number(stat.hits),
        blocked_shots: Number(stat.blocked_shots),
      }))
    );
  }
}
