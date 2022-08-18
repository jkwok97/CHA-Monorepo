import {
  Awards_V2,
  AwardTypeEnum,
  Goalies_Stats_V2,
  Players_Stats_V2,
  Team_Stats_V2,
} from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiAwardsService {
  constructor(
    @InjectRepository(Awards_V2) private repo: Repository<Awards_V2>,
    @InjectRepository(Players_Stats_V2)
    private playerStatsRepo: Repository<Players_Stats_V2>,
    @InjectRepository(Goalies_Stats_V2)
    private goalieStatsRepo: Repository<Goalies_Stats_V2>,
    @InjectRepository(Team_Stats_V2)
    private teamStatsRepo: Repository<Team_Stats_V2>
  ) {}

  selectUserOptions = {
    id: true,
    display_season: true,
    cha_season: true,
    award_type: {
      display_name: true,
      id: true,
    },
    team_id: {
      id: true,
      city: true,
      nickname: true,
      teamlogo: true,
      teamcolor: true,
    },
    users_id: {
      firstname: true,
      lastname: true,
    },
  };

  selectPlayerOptions = {
    id: true,
    display_season: true,
    cha_season: true,
    award_type: {
      display_name: true,
      id: true,
    },
    team_id: {
      city: true,
      nickname: true,
      teamlogo: true,
      teamcolor: true,
    },
    player_id: {
      id: true,
      nhl_id: true,
      firstname: true,
      lastname: true,
    },
    users_id: {
      firstname: true,
      lastname: true,
    },
  };

  async getChampions(): Promise<Awards_V2[]> {
    return await this.repo.find({
      select: this.selectUserOptions,
      relations: ['users_id', 'team_id', 'award_type'],
      where: {
        award_type: {
          id: AwardTypeEnum.CHAMPION,
        },
      },
    });
  }

  async getScorerAwards() {
    const scorers = await this.repo.find({
      select: this.selectPlayerOptions,
      relations: ['users_id', 'team_id', 'player_id', 'award_type'],
      where: {
        award_type: {
          id: AwardTypeEnum.SCORER,
        },
      },
    });

    const scrorersWithStats = await this.setPlayerStats(scorers);

    return scrorersWithStats;
  }

  async getDefenseAwards(): Promise<Awards_V2[]> {
    const defense = await this.repo.find({
      select: this.selectPlayerOptions,
      relations: ['users_id', 'team_id', 'player_id', 'award_type'],
      where: {
        award_type: {
          id: AwardTypeEnum.DEFENSE,
        },
      },
    });

    const defenseWithStats = await this.setPlayerStats(defense);

    return defenseWithStats;
  }

  async getRookieAwards(): Promise<Awards_V2[]> {
    const rookies = await this.repo.find({
      select: this.selectPlayerOptions,
      relations: ['users_id', 'team_id', 'player_id', 'award_type'],
      where: {
        award_type: {
          id: AwardTypeEnum.ROOKIE,
        },
      },
    });

    const rookiesWithStats = await this.setPlayerStats(rookies);

    return rookiesWithStats;
  }

  async getGoalieAwards(): Promise<Awards_V2[]> {
    const goalies = await this.repo.find({
      select: this.selectPlayerOptions,
      relations: ['users_id', 'team_id', 'player_id', 'award_type'],
      where: {
        award_type: {
          id: AwardTypeEnum.GOALIE,
        },
      },
    });

    const goaliesWithStats = await this.setGoalieStats(goalies);

    return goaliesWithStats;
  }

  async getGmAwards(): Promise<Awards_V2[]> {
    return await this.repo.find({
      select: this.selectUserOptions,
      relations: ['users_id', 'team_id', 'award_type'],
      where: {
        award_type: {
          id: AwardTypeEnum.GM,
        },
      },
    });
  }

  async getSeasonAwards(): Promise<Awards_V2[]> {
    const seasonAwards = await this.repo.find({
      select: this.selectUserOptions,
      relations: ['users_id', 'team_id', 'award_type'],
      where: {
        award_type: {
          id: AwardTypeEnum.SEASON,
        },
      },
    });

    const seasonAwardsWithStats = await this.setSeasonStats(seasonAwards);

    return seasonAwardsWithStats;
  }

  private async setPlayerStats(array: Awards_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        stats: await this.getPlayerStats(item.player_id.id, item.cha_season),
      }))
    );
  }

  private async getPlayerStats(playerId: number, chaSeason: string) {
    return await this.playerStatsRepo.findOne({
      select: {
        id: true,
        player_id: true,
        playing_year: true,
        games_played: true,
        goals: true,
        assists: true,
        points: true,
      },
      where: {
        player_id: playerId,
        playing_year: chaSeason,
        season_type: 'Regular',
      },
    });
  }

  private async setGoalieStats(array: Awards_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        stats: await this.getGoalieStats(item.player_id.id, item.cha_season),
      }))
    );
  }

  private async getGoalieStats(playerId: number, chaSeason: string) {
    return await this.goalieStatsRepo.findOne({
      select: {
        id: true,
        player_id: true,
        playing_year: true,
        games_played: true,
        wins: true,
        goals_against_avg: true,
        save_pct: true,
      },
      where: {
        player_id: playerId,
        playing_year: chaSeason,
        season_type: 'Regular',
      },
    });
  }

  private async setSeasonStats(array: Awards_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        stats: await this.getSeasonStats(item.team_id.id, item.cha_season),
      }))
    );
  }

  private async getSeasonStats(teamId: number, chaSeason: string) {
    console.log(teamId, chaSeason);
    return await this.teamStatsRepo.findOne({
      select: {
        id: true,
        team_id: true,
        playing_year: true,
        games_played: true,
        wins: true,
        goals_for: true,
        goals_against: true,
        points: true,
      },
      where: {
        team_id: teamId,
        playing_year: chaSeason,
        season_type: 'Regular',
      },
    });
  }
}
