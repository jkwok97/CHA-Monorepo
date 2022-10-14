import { Goalie_Ratings_V2 } from '@api/entities';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
import { ApiGoalieRatingsService } from '../services';

@Controller('goalie-ratings')
export class GoalieRatingsController {
  constructor(private goalieRatingsService: ApiGoalieRatingsService) {}

  @Get()
  async getAllRatings(): Promise<Goalie_Ratings_V2[]> {
    const players = await this.goalieRatingsService.getAll();

    if (!players || players.length < 1) {
      throw new NotFoundException('ratings not found');
    }
    return players;
  }

  @Put('/:id')
  updatePlayerById(@Param() param, @Body() body): Promise<Goalie_Ratings_V2> {
    return this.goalieRatingsService.updatePlayerById(parseInt(param.id), body);
  }
}
