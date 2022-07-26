import { Test, TestingModule } from '@nestjs/testing';
import { WaiversService } from './waivers.service';

describe('WaiversService', () => {
  let service: WaiversService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaiversService],
    }).compile();

    service = module.get<WaiversService>(WaiversService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
