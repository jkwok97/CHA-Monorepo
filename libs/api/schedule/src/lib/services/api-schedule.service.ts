import { Schedule_V2, Teams_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';

@Injectable()
export class ApiScheduleService {
  constructor(
    @InjectRepository(Schedule_V2)
    private repo: Repository<Schedule_V2>,
    @InjectRepository(Teams_V2)
    private teamInfoRepo: Repository<Teams_V2>
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

  private async getTeamLastFive(teamId: number, type: 'visitors' | 'home') {
    let lastFive: Schedule_V2[];

    if (type === 'visitors') {
      lastFive = await this.repo.find({
        where: {
          vis_team_id: teamId,
        },
        order: {
          game_day: 'DESC',
        },
        take: 5,
      });
    } else {
      lastFive = await this.repo.find({
        where: {
          home_team_id: teamId,
        },
        order: {
          game_day: 'DESC',
        },
        take: 5,
      });
    }

    return await this.getRecord(lastFive, teamId);
  }

  private async getRecord(lastFive: Schedule_V2[], teamId: number) {
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
          'visitors'
        ),
        homeTeamInfo: await this.getTeamInfo(item.home_team_id),
        homeTeamLastFive: await this.getTeamLastFive(item.vis_team_id, 'home'),
      }))
    );
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
