import { Current_Season_V2 } from '@api/entities';
import { LeagueDataDto } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
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
}
