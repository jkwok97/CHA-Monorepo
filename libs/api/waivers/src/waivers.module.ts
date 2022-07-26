import { Module } from '@nestjs/common';
import { WaiversService } from './waivers.service';

@Module({
  providers: [WaiversService],
  exports: [WaiversService],
})
export class WaiversModule {}
