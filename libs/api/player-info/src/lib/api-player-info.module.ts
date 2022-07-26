import { Module } from '@nestjs/common';
import { PlayerInfoController } from './controllers';

@Module({
  controllers: [PlayerInfoController],
  providers: [],
  exports: [],
})
export class ApiPlayerInfoModule {}
