import { Teams_V2, Waivers_V2 } from '@api/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
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

  async updateWaiverPriority(id: number, attrs: Partial<Waivers_V2>) {
    const team = await this.repo.findOneByOrFail({ id });

    if (!team) {
      throw new NotFoundException('team not found');
    }

    Object.assign(team, attrs);

    return this.repo.save(team);
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
