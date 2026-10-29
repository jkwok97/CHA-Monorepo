import { Current_Season_V2 } from '@api/entities';
import { LeagueDataDto } from '@cha/shared/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LeagueService {
  private cachedLeagueData: LeagueDataDto | null = null;
  private cacheExpiresAt = 0;
  private readonly CACHE_TTL_MS = 60 * 1000; // 60 seconds

  constructor(
    @InjectRepository(Current_Season_V2)
    private readonly repo: Repository<Current_Season_V2>
  ) {}

  async getCurrentLeagueData(): Promise<LeagueDataDto> {
    const now = Date.now();
    if (this.cachedLeagueData && now < this.cacheExpiresAt) {
      return this.cachedLeagueData;
    }

    const data = await this.repo.findOneBy({ id: 1 });

    if (!data) {
      throw new NotFoundException('Current league data not found');
    }

    this.cachedLeagueData = data as unknown as LeagueDataDto;
    this.cacheExpiresAt = now + this.CACHE_TTL_MS;

    return this.cachedLeagueData;
  }

  async updateCurrentLeagueData(
    attrs: Partial<Current_Season_V2>
  ): Promise<Current_Season_V2> {
    const data = await this.repo.findOneBy({ id: 1 });

    if (!data) {
      throw new NotFoundException('Current league data with id 1 not found');
    }

    Object.assign(data, attrs);
    const updated = await this.repo.save(data);

    this.cachedLeagueData = null;
    this.cacheExpiresAt = 0;

    return updated;
  }
}
