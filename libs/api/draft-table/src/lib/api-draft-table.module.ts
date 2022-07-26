import { Module } from '@nestjs/common';
import { DraftTableController } from './controllers';

@Module({
  controllers: [DraftTableController],
  providers: [],
  exports: [],
})
export class ApiDraftTableModule {}
