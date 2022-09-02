import { Schedule_V2, Teams_V2, Team_Stats_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { it } from 'node:test';
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
        game_day: Between(currentDay, currentDay + 5),
      },
      order: {
        game_day: 'ASC',
      },
    });

    const scheduleTeamInfo = await this.setTeamInfo(schedule);

    return scheduleTeamInfo;
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
      .orderBy('schedule.game_day', 'DESC')
      .limit(5)
      .getMany();

    return await this.getLastFiveRecord(lastFive, teamId);
  }

  private async getLastFiveRecord(lastFive: Schedule_V2[], teamId: number) {
    const lastFiveRecord = [];

    await lastFive.forEach((record: Schedule_V2) => {
      if (record.home_team_id === teamId) {
        if (record.home_team_score > record.vis_team_score) {
          lastFiveRecord.push('W');
        } else if (record.home_team_score < record.vis_team_score) {
          lastFiveRecord.push('L');
        } else {
          lastFiveRecord.push('T');
        }
      } else {
        if (record.vis_team_score > record.home_team_score) {
          lastFiveRecord.push('W');
        } else if (record.vis_team_score < record.home_team_score) {
          lastFiveRecord.push('L');
        } else {
          lastFiveRecord.push('T');
        }
      }
    });

    return lastFiveRecord;
  }

  private async setTeamInfo(array: Schedule_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        visTeamInfo: await this.getTeamInfo(item.vis_team_id),
        visTeamLastFive: await this.getTeamLastFive(
          item.vis_team_id,
          item.playing_year
        ),
        visTeamRecord: await this.getTeamSeasonRecord(item.vis_team_id),
        homeTeamInfo: await this.getTeamInfo(item.home_team_id),
        homeTeamLastFive: await this.getTeamLastFive(
          item.home_team_id,
          item.playing_year
        ),
        homeTeamRecord: await this.getTeamSeasonRecord(item.home_team_id),
      }))
    );
  }

  private async getTeamSeasonRecord(teamId: number) {
    return await this.teamStatsRepo.find({
      select: {
        wins: true,
        loss: true,
        ties: true,
      },
      where: {
        team_id: {
          id: teamId,
        },
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
      },
      where: {
        id: teamId,
      },
    });
  }
}
