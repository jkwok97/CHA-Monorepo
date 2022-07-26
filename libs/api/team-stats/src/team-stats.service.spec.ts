import { Test, TestingModule } from '@nestjs/testing';
import { TeamStatsService } from './team-stats.service';

describe('TeamStatsService', () => {
  let service: TeamStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamStatsService],
    }).compile();

    service = module.get<TeamStatsService>(TeamStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
