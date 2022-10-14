import { Player_Ratings_V2 } from '@api/entities';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
import { ApiPlayerRatingsService } from '../services';

@Controller('player-ratings')
export class PlayerRatingsController {
  constructor(private playerRatingsService: ApiPlayerRatingsService) {}

  @Get('/:season')
  async getAllRatings(@Param() param): Promise<Player_Ratings_V2[]> {
    const players = await this.playerRatingsService.getAll(param.season);

    if (!players || players.length < 1) {
      throw new NotFoundException('ratings not found');
    }
    return players;
  }

  @Put('/:id')
  updatePlayerById(@Param() param, @Body() body): Promise<Player_Ratings_V2> {
    return this.playerRatingsService.updatePlayerById(parseInt(param.id), body);
  }
}
