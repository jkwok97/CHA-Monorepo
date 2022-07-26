import { Module } from '@nestjs/common';
import { AwardsService } from './awards.service';

@Module({
  providers: [AwardsService],
  exports: [AwardsService],
})
export class AwardsModule {}
