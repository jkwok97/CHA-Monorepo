import { Current_Season_V2 } from '@api/entities';
import { LeagueDataDto } from '@cha/shared/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LeagueService {
  constructor(
    @InjectRepository(Current_Season_V2)
    private repo: Repository<Current_Season_V2>
  ) {}

  async getCurrentLeagueData(): Promise<LeagueDataDto> {
    return (await this.repo.find()) as unknown as LeagueDataDto;
  }

  async updateCurrentLeagueData(attrs: Partial<Current_Season_V2>) {
    const data = await this.repo.findOneByOrFail({ id: 1 });

    if (!data) {
      throw new NotFoundException('data not found');
    }

    Object.assign(data, attrs);

    return this.repo.save(data);
  }
}
