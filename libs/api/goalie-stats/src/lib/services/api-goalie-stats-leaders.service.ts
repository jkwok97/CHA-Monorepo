import { Goalies_Stats_V2, Teams_V2 } from '@api/entities';
import {
  StatGoalieLeaderDto,
  StatGoalieLeadersDto,
} from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan } from 'typeorm';

@Injectable()
export class ApiGoalieStatsLeadersService {
  constructor(
    @InjectRepository(Goalies_Stats_V2)
    private repo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>
  ) {}

  async getGoalieStatsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minGames: string
  ): Promise<StatGoalieLeadersDto> {
    const shotsFacedLeaders = await this.getShotsFacedLeaders(
      season,
      seasonType,
      minGames
    );
    const gaaLeaders = await this.getGaaLeaders(season, seasonType, minGames);
    const savePctLeaders = await this.getSavePctLeaders(
      season,
      seasonType,
      minGames
    );
    const shutoutsLeaders = await this.getShutoutLeaders(season, seasonType);
    const winsLeaders = await this.getWinsLeaders(season, seasonType);

    return {
      shotsFaced: shotsFacedLeaders as unknown as StatGoalieLeaderDto[],
      gaa: gaaLeaders as unknown as StatGoalieLeaderDto[],
      savePct: savePctLeaders as unknown as StatGoalieLeaderDto[],
      shutouts: shutoutsLeaders as unknown as StatGoalieLeaderDto[],
      wins: winsLeaders as unknown as StatGoalieLeaderDto[],
    };
  }

  private async getShotsFacedLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minGames: string
  ) {
    const shotsFacedLeaders = await this.repo.find({
      select: {
        id: true,
        shots_for: true,
        team_name: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isgoalie: true,
        },
      },
      relations: {
        player_id: true,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
        games_played: MoreThan(Number(minGames)),
      },
      order: {
        shots_for: 'DESC',
      },
      take: 10,
    });

    const shotsFacedLeadersWithTeamInfo = await this.setTeamInfo(
      shotsFacedLeaders
    );

    return shotsFacedLeadersWithTeamInfo;
  }

  private async getGaaLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minGames: string
  ) {
    const gaaLeaders = await this.repo.find({
      select: {
        id: true,
        goals_against_avg: true,
        team_name: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isgoalie: true,
        },
      },
      relations: {
        player_id: true,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
        games_played: MoreThan(Number(minGames)),
      },
      order: {
        goals_against_avg: 'ASC',
      },
      take: 10,
    });

    const gaaLeadersWithTeamInfo = await this.setTeamInfo(gaaLeaders);

    return gaaLeadersWithTeamInfo;
  }

  private async getSavePctLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs',
    minGames: string
  ) {
    const savePctLeaders = await this.repo.find({
      select: {
        id: true,
        save_pct: true,
        team_name: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isgoalie: true,
        },
      },
      relations: {
        player_id: true,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
        games_played: MoreThan(Number(minGames)),
      },
      order: {
        save_pct: 'DESC',
      },
      take: 10,
    });

    const savePctLeadersWithTeamInfo = await this.setTeamInfo(savePctLeaders);

    return savePctLeadersWithTeamInfo;
  }

  private async getShutoutLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const shutoutLeaders = await this.repo.find({
      select: {
        id: true,
        shutouts: true,
        team_name: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isgoalie: true,
        },
      },
      relations: {
        player_id: true,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
      },
      order: {
        shutouts: 'DESC',
      },
      take: 10,
    });

    const shutoutLeadersWithTeamInfo = await this.setTeamInfo(shutoutLeaders);

    return shutoutLeadersWithTeamInfo;
  }

  private async getWinsLeaders(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ) {
    const winLeaders = await this.repo.find({
      select: {
        id: true,
        wins: true,
        team_name: true,
        player_id: {
          id: true,
          firstname: true,
          lastname: true,
          nhl_id: true,
          isgoalie: true,
        },
      },
      relations: {
        player_id: true,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
      },
      order: {
        wins: 'DESC',
      },
      take: 10,
    });

    const winLeadersWithTeamInfo = await this.setTeamInfo(winLeaders);

    return winLeadersWithTeamInfo;
  }

  private async setTeamInfo(array: Goalies_Stats_V2[]) {
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
