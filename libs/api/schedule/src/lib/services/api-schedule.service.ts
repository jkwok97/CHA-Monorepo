import { Schedule_V2, Teams_V2, Team_Stats_V2 } from '@api/entities';
import { ScheduleAllDto } from '@cha/shared/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Brackets, Repository } from 'typeorm';

@Injectable()
export class ApiScheduleService {
  constructor(
    @InjectRepository(Schedule_V2)
    private repo: Repository<Schedule_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>,
    @InjectRepository(Team_Stats_V2)
    private teamStatsRepo: Repository<Team_Stats_V2>
  ) {}

  async getCompleteScheduleBySeason(season: string) {
    const schedule = await this.repo.find({
      where: {
        playing_year: season,
      },
      order: {
        game_day: 'ASC',
      },
    });

    const scheduleTeamInfo = await this.setTeamInfo(schedule);

    return scheduleTeamInfo;
  }

  async getNextDays(season: string, currentDay: number) {
    const schedule = await this.repo.find({
      where: {
        playing_year: season,
        game_day: Between(currentDay, currentDay + 4),
      },
      order: {
        game_day: 'ASC',
      },
    });

    const scheduleTeamInfo = await this.setTeamNextInfo(schedule);

    return scheduleTeamInfo;
  }

  async updateGameById(gameId: number, gameData: ScheduleAllDto) {
    const game = await this.repo.findOneByOrFail({ id: gameId });

    if (!game) {
      throw new NotFoundException('player not found');
    }

    const attrs: Partial<Schedule_V2> = {
      home_team_score: gameData.home_team_score,
      vis_team_score: gameData.vis_team_score,
    };

    Object.assign(game, attrs);

    return this.repo.save(game);
  }

  private async getTeamLastFive(teamId: number, season: string) {
    const lastFive = await this.repo
      .createQueryBuilder('schedule')
      .where('schedule.playing_year = :year', { year: season })
      .andWhere(
        new Brackets((qb) => {
          qb.where('schedule.home_team_id = :teamId', { teamId }).orWhere(
            'schedule.vis_team_id = :teamId',
            { teamId }
          );
        })
      )
      .andWhere('schedule.home_team_score is not null')
      .orderBy('schedule.game_day', 'DESC')
      .limit(5)
      .getMany();

    return await this.getLastFiveRecord(lastFive, Number(teamId));
  }

  private async getLastFiveRecord(lastFive: Schedule_V2[], teamId: number) {
    console.log(lastFive);
    const lastFiveRecord = [];

    await lastFive.forEach((record: Schedule_V2) => {
      if (record.home_team_id === teamId) {
        if (Number(record.home_team_score) > Number(record.vis_team_score)) {
          lastFiveRecord.push('W');
        } else if (
          Number(record.home_team_score) < Number(record.vis_team_score)
        ) {
          lastFiveRecord.push('L');
        } else {
          lastFiveRecord.push('T');
        }
      } else {
        if (Number(record.vis_team_score) > Number(record.home_team_score)) {
          lastFiveRecord.push('W');
        } else if (
          Number(record.vis_team_score) < Number(record.home_team_score)
        ) {
          lastFiveRecord.push('L');
        } else {
          lastFiveRecord.push('T');
        }
      }
    });

    return lastFiveRecord;
  }

  private async getVersusRecord(data: Schedule_V2[], teamId: number) {
    let wins = 0;
    let loss = 0;
    let ties = 0;

    await data.forEach((game: Schedule_V2) => {
      if (game.vis_team_id === teamId) {
        Number(game.vis_team_score) > Number(game.home_team_score)
          ? wins++
          : Number(game.vis_team_score) === Number(game.home_team_score)
          ? ties++
          : loss++;
      } else if (game.home_team_id === teamId) {
        Number(game.home_team_score) > Number(game.vis_team_score)
          ? wins++
          : Number(game.home_team_score) === Number(game.vis_team_score)
          ? ties++
          : loss++;
      }
    });

    return {
      wins,
      loss,
      ties,
    };
  }

  private async setTeamNextInfo(array: Schedule_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        id: item.id,
        gameDay: item.game_day,
        visTeamScore: item.vis_team_score,
        visTeamInfo: await this.getTeamInfo(item.vis_team_id),
        visTeamLastFive: await this.getTeamLastFive(
          Number(item.vis_team_id),
          item.playing_year
        ),
        visTeamRecord: await this.getTeamSeasonRecord(
          Number(item.vis_team_id),
          item.playing_year
        ),
        visTeamVersus: await this.getTeamRecordVersus(
          Number(item.vis_team_id),
          Number(item.home_team_id),
          item.playing_year
        ),
        homeTeamScore: item.home_team_score,
        homeTeamInfo: await this.getTeamInfo(item.home_team_id),
        homeTeamLastFive: await this.getTeamLastFive(
          Number(item.home_team_id),
          item.playing_year
        ),
        homeTeamRecord: await this.getTeamSeasonRecord(
          Number(item.home_team_id),
          item.playing_year
        ),
        homeTeamVersus: await this.getTeamRecordVersus(
          Number(item.home_team_id),
          Number(item.vis_team_id),
          item.playing_year
        ),
      }))
    );
  }

  private async setTeamInfo(array: Schedule_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        visTeamInfo: await this.getTeamInfo(item.vis_team_id),
        homeTeamInfo: await this.getTeamInfo(item.home_team_id),
      }))
    );
  }

  private async getTeamRecordVersus(
    teamOneId: number,
    teamTwoId: number,
    season: string
  ) {
    const versus = await this.repo
      .createQueryBuilder('schedule')
      .where('schedule.playing_year = :year', { year: season })
      .where(
        new Brackets((qb) => {
          qb.where('schedule.vis_team_id = :teamOneId', { teamOneId })
            .andWhere('schedule.home_team_id = :teamTwoId', { teamTwoId })
            .andWhere('schedule.playing_year = :year', { year: season })
            .andWhere('schedule.vis_team_score >= :empty', { empty: 0 });
        })
      )
      .orWhere(
        new Brackets((qb) => {
          qb.where('schedule.vis_team_id = :teamTwoId', { teamTwoId })
            .andWhere('schedule.home_team_id = :teamOneId', { teamOneId })
            .andWhere('schedule.playing_year = :year', { year: season })
            .andWhere('schedule.vis_team_score >= :empty', { empty: 0 });
        })
      )
      .getMany();

    return await this.getVersusRecord(versus, Number(teamOneId));
  }

  private async getTeamSeasonRecord(teamId: number, season: string) {
    return await this.teamStatsRepo.findOne({
      select: {
        id: true,
        wins: true,
        loss: true,
        ties: true,
      },
      where: {
        team_id: {
          id: teamId,
        },
        playing_year: season,
        season_type: 'Regular',
      },
    });
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
