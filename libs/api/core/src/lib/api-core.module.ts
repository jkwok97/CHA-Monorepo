import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configuration, validationSchema } from './config';
import { dbConfig } from '../../../../../ormconfig.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    // TypeOrmModule.forRoot({
    //   ...dbConfig,
    // }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreModule {}
