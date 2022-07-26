import { Module } from '@nestjs/common';
import { WaiversController } from './controllers';

@Module({
  controllers: [WaiversController],
  providers: [],
  exports: [],
})
export class ApiWaiversModule {}
