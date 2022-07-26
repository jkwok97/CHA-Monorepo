import { Test, TestingModule } from '@nestjs/testing';
import { DraftTableController } from './draft-table.controller';

describe('DraftTableController', () => {
  let controller: DraftTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DraftTableController],
    }).compile();

    controller = module.get<DraftTableController>(DraftTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
