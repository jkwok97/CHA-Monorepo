import { Module } from '@nestjs/common';
import { NhlController } from './controllers';

@Module({
  controllers: [NhlController],
  providers: [],
  exports: [],
})
export class ApiNhlModule {}
