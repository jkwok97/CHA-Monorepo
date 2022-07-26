import { Module } from '@nestjs/common';
import { SalariesService } from './salaries.service';

@Module({
  providers: [SalariesService],
  exports: [SalariesService],
})
export class SalariesModule {}
