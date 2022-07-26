import { Test, TestingModule } from '@nestjs/testing';
import { TeamStatsController } from './team-stats.controller';

describe('TeamStatsController', () => {
  let controller: TeamStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamStatsController],
    }).compile();

    controller = module.get<TeamStatsController>(TeamStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
