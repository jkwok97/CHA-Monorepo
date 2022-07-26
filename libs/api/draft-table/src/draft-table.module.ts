import { Module } from '@nestjs/common';
import { DraftTableService } from './draft-table.service';

@Module({
  providers: [DraftTableService],
  exports: [DraftTableService],
})
export class DraftTableModule {}
