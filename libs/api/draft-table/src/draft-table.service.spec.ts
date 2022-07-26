import { Test, TestingModule } from '@nestjs/testing';
import { DraftTableService } from './draft-table.service';

describe('DraftTableService', () => {
  let service: DraftTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DraftTableService],
    }).compile();

    service = module.get<DraftTableService>(DraftTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
