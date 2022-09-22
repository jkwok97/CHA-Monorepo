import { Teams_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TeamsService {
  constructor(@InjectRepository(Teams_V2) private repo: Repository<Teams_V2>) {}

  async getUserTeams(id: number): Promise<Teams_V2[]> {
    return await this.repo.findBy({ users_id: id });
  }

  async getCurrentTeams(): Promise<Teams_V2[]> {
    return await this.repo.findBy({ isactive: true });
  }

  async getUserIdByTeamId(teamId: number): Promise<any> {
    return await this.repo.findOne({
      select: {
        id: true,
        users_id: true,
      },
      where: {
        id: teamId,
      },
    });
  }
}
