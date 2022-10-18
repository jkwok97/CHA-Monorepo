import { Teams_V2, Waivers_V2 } from '@api/entities';
import { WaiversDto } from '@cha/shared/entities';
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

  async updateWaiverPriority(waiverList: WaiversDto[]) {
    const allWaivers = await this.setNewWaiverPriority(waiverList);

    return allWaivers;
  }

  private async setNewWaiverPriority(waiverList: WaiversDto[]) {
    return await waiverList.forEach(
      async (waiver: WaiversDto) => await this.updateWaiver(waiver)
    );
  }

  private async updateWaiver(team: WaiversDto) {
    const waiver = await this.repo.findOneByOrFail({ id: team.id });

    if (!waiver) {
      throw new NotFoundException('team not found');
    }

    Object.assign(waiver, team);

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
