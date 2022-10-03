import { Teams_V2, Users_V2 } from '@api/entities';
import { TeamCreateDto } from '@cha/shared/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Teams_V2) private repo: Repository<Teams_V2>,
    @InjectRepository(Users_V2) private userRepo: Repository<Users_V2>
  ) {}

  // async getAll(): Promise<Teams_V2[]> {
  //   return await this.repo.find();
  // }

  async getUserTeams(id: number): Promise<Teams_V2[]> {
    return await this.repo.findBy({ users_id: id });
  }

  async getCurrentTeams(): Promise<Teams_V2[]> {
    return await this.repo.findBy({ isactive: true });
  }

  async getUserByTeamId(teamId: number): Promise<any> {
    const userId = await this.repo.findOne({
      select: {
        id: true,
        users_id: true,
      },
      where: {
        id: teamId,
      },
    });

    const user = await this.userRepo.findOne({
      where: {
        id: userId.users_id,
      },
    });

    return user;
  }

  // async updateTeamById(id: number, attrs: Partial<Teams_V2>) {
  //   const team = await this.repo.findOneByOrFail({ id });

  //   if (!team) {
  //     throw new NotFoundException('Team not found');
  //   }

  //   Object.assign(team, attrs);

  //   return this.repo.save(team);
  // }

  // async addTeam(body: TeamCreateDto) {
  //   const team = await this.repo.create(body);

  //   return this.repo.save(team);
  // }

  // async deleteTeam(id: number): Promise<Teams_V2> {
  //   const team = await this.repo.findOneByOrFail({ id });

  //   if (!team) {
  //     throw new NotFoundException('Team not found');
  //   }
  //   return this.repo.remove(team);
  // }
}
