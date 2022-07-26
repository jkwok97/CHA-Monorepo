import { Test, TestingModule } from '@nestjs/testing';
import { PlayerStatsController } from './player-stats.controller';

describe('PlayerStatsController', () => {
  let controller: PlayerStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerStatsController],
    }).compile();

    controller = module.get<PlayerStatsController>(PlayerStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
