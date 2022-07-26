import { Module } from '@nestjs/common';
import { PlayerRatingsController } from './controllers';

@Module({
  controllers: [PlayerRatingsController],
  providers: [],
  exports: [],
})
export class ApiPlayerRatingsModule {}
