import { Test, TestingModule } from '@nestjs/testing';
import { NhlService } from './nhl.service';

describe('NhlService', () => {
  let service: NhlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NhlService],
    }).compile();

    service = module.get<NhlService>(NhlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
