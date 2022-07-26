import { Module } from '@nestjs/common';
import { SalariesController } from './controllers';

@Module({
  controllers: [SalariesController],
  providers: [],
  exports: [],
})
export class ApiSalariesModule {}
