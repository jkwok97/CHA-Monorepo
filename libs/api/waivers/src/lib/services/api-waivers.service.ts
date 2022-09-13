import { Teams_V2, Waivers_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiWaiversService {
  constructor(
    @InjectRepository(Waivers_V2)
    private repo: Repository<Waivers_V2>,
    @InjectRepository(Teams_V2)
    private teamsRepo: Repository<Teams_V2>
  ) {}

  async getWaiverPriority() {
    const allWaivers = await this.repo.find();

    const allWaiverWithTeamInfo = await this.setTeamInfo(allWaivers);

    return allWaiverWithTeamInfo;
  }

  private async setTeamInfo(array: any[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        teamInfo: await this.getTeamInfo(item.team_id),
      }))
    );
  }

  private async getTeamInfo(teamId: number) {
    if (teamId) {
      return await this.teamsRepo.findOne({
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
    } else {
      return {};
    }
  }
}
