import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dbConfig } from '../../../../../ormconfig.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dbConfig,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreModule {}
