import { Schedule_V2, Teams_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
    });

    const scheduleTeamInfo = await this.setTeamInfo(schedule);

    return scheduleTeamInfo;
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
