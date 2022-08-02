import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApiCoreModule } from '@api/core';
import { Users_V2, Teams_V2 } from '@cha/shared/entities';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      // database: 'defaultdb',
      // host: process.env.DATABASE_HOST,
      // username: process.env.DATABASE_USER,
      // password: process.env.DATABASE_PASSWORD,
      // port: parseInt(process.env.DATABASE_PORT),
      synchronize: false,
      entities: [Users_V2, Teams_V2],
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    ApiCoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
