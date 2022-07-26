import { Module } from '@nestjs/common';
import { AwardsController } from './controllers';

@Module({
  controllers: [AwardsController],
  providers: [],
  exports: [],
})
export class ApiAwardsModule {}
