import { Test, TestingModule } from '@nestjs/testing';
import { WaiversController } from './waivers.controller';

describe('WaiversController', () => {
  let controller: WaiversController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaiversController],
    }).compile();

    controller = module.get<WaiversController>(WaiversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
