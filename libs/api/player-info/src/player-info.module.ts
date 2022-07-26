import { Module } from '@nestjs/common';
import { PlayerInfoService } from './player-info.service';

@Module({
  providers: [PlayerInfoService],
  exports: [PlayerInfoService],
})
export class PlayerInfoModule {}
