import { PlayerCreateDto, PlayerDto } from '@cha/shared/entities';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiPlayerInfoService } from '../services';

@Controller('player-info')
export class PlayerInfoController {
  constructor(private playerInfoService: ApiPlayerInfoService) {}

  @Get()
  async getAllPlayers(): Promise<PlayerDto[]> {
    const players = await this.playerInfoService.getAll();

    if (!players || players.length < 1) {
      throw new NotFoundException('players not found');
    }
    return players;
  }

  @Put('/:id')
  updatePlayerById(@Param() param, @Body() body): Promise<PlayerDto> {
    return this.playerInfoService.updatePlayerById(parseInt(param.id), body);
  }

  @Post('/add')
  addPlayer(@Body() body: PlayerCreateDto) {
    return this.playerInfoService.addPlayer(body);
  }

  @Delete('/:id')
  deletePlayer(@Param() param) {
    return this.playerInfoService.deletePlayer(parseInt(param.id));
  }
}
