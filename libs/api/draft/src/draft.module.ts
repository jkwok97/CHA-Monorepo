import { Module } from '@nestjs/common';
import { DraftService } from './draft.service';

@Module({
  providers: [DraftService],
  exports: [DraftService],
})
export class DraftModule {}
