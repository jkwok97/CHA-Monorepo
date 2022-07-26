import { Module } from '@nestjs/common';
import { EntryDraftController } from './controllers';

@Module({
  controllers: [EntryDraftController],
  providers: [],
  exports: [],
})
export class ApiEntryDraftModule {}
