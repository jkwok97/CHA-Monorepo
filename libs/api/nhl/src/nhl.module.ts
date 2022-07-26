import { Module } from '@nestjs/common';
import { NhlService } from './nhl.service';

@Module({
  providers: [NhlService],
  exports: [NhlService],
})
export class NhlModule {}
