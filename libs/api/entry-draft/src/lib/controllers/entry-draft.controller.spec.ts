import { Test, TestingModule } from '@nestjs/testing';
import { EntryDraftController } from './entry-draft.controller';

describe('EntryDraftController', () => {
  let controller: EntryDraftController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntryDraftController],
    }).compile();

    controller = module.get<EntryDraftController>(EntryDraftController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
