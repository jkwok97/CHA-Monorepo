import { Test, TestingModule } from '@nestjs/testing';
import { NhlController } from './nhl.controller';

describe('NhlController', () => {
  let controller: NhlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NhlController],
    }).compile();

    controller = module.get<NhlController>(NhlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
