import { ApiCoreModule } from '@api/core';
import {
  Users_V2,
  Teams_V2,
  Award_Type_V2,
  Awards_V2,
  Draft_Order_V2,
  Drafts_V2,
  Conferences_V2,
  Current_Season_V2,
  Divisions_V2,
  Players_V2,
  Goalie_Ratings_V2,
  Player_Ratings_V2,
  Salaries_V2,
  Schedule_V2,
  Goalies_Stats_V2,
  Players_Stats_V2,
  Team_Stats_V2,
  Transactions_V2,
  Waivers_V2,
} from '@api/entities';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
      entities: [
        Users_V2,
        Teams_V2,
        Award_Type_V2,
        Awards_V2,
        Draft_Order_V2,
        Drafts_V2,
        Conferences_V2,
        Current_Season_V2,
        Divisions_V2,
        Players_V2,
        Goalie_Ratings_V2,
        Player_Ratings_V2,
        Salaries_V2,
        Schedule_V2,
        Goalies_Stats_V2,
        Players_Stats_V2,
        Team_Stats_V2,
        Transactions_V2,
        Waivers_V2,
      ],
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
