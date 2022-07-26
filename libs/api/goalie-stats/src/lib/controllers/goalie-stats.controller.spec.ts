import { Test, TestingModule } from '@nestjs/testing';
import { GoalieStatsController } from './goalie-stats.controller';

describe('GoalieStatsController', () => {
  let controller: GoalieStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoalieStatsController],
    }).compile();

    controller = module.get<GoalieStatsController>(GoalieStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
