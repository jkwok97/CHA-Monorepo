import { Module } from '@nestjs/common';
import { TeamsController } from './controllers';

@Module({
  controllers: [TeamsController],
  providers: [],
  exports: [],
})
export class ApiTeamsModule {}
