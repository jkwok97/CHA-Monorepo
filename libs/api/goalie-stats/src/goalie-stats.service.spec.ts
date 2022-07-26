import { Test, TestingModule } from '@nestjs/testing';
import { GoalieStatsService } from './goalie-stats.service';

describe('GoalieStatsService', () => {
  let service: GoalieStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoalieStatsService],
    }).compile();

    service = module.get<GoalieStatsService>(GoalieStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
