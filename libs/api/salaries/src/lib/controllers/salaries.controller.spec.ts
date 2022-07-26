import { Test, TestingModule } from '@nestjs/testing';
import { SalariesController } from './salaries.controller';

describe('SalariesController', () => {
  let controller: SalariesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalariesController],
    }).compile();

    controller = module.get<SalariesController>(SalariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
