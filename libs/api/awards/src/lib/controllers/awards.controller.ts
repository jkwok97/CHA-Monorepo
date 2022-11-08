import { Awards_V2, Award_Type_V2 } from '@api/entities';
import { AwardCreateDto, AwardDto, UserAwardDto } from '@cha/shared/entities';
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ApiUserAwardsService } from '../services';
import { ApiAwardsService } from '../services/api-awards.service';

@Controller('awards')
export class AwardsController {
  constructor(
    private awardsService: ApiAwardsService,
    private userAwardsService: ApiUserAwardsService
  ) {}

  @Get()
  async getAll(): Promise<Awards_V2[]> {
    const awards = await this.awardsService.getAll();

    if (!awards || awards.length < 1) {
      throw new NotFoundException('awards not found');
    }
    return awards;
  }

  @Put('/:id')
  updateAwardById(@Param() param, @Body() body): Promise<AwardDto> {
    return this.awardsService.updateAwardById(parseInt(param.id), body);
  }

  @Post('/add')
  addPlayer(@Body() body: AwardCreateDto) {
    return this.awardsService.addAward(body);
  }

  @Delete('/:id')
  deletePlayer(@Param() param) {
    return this.awardsService.deleteAward(parseInt(param.id));
  }

  @Get('/champions')
  async getChampions(): Promise<Awards_V2[]> {
    const champions = await this.awardsService.getChampions();

    if (!champions || champions.length < 1) {
      throw new NotFoundException('Champions Awards not found');
    }
    return champions;
  }

  @Get('/scorers')
  async getScorerAwards() {
    const scorers = await this.awardsService.getScorerAwards();

    if (!scorers || scorers.length < 1) {
      throw new NotFoundException('Scorers Awards not found');
    }
    return scorers;
  }

  @Get('/defense')
  async getDefenseAwards(): Promise<Awards_V2[]> {
    const defense = await this.awardsService.getDefenseAwards();

    if (!defense || defense.length < 1) {
      throw new NotFoundException('Defense Awards not found');
    }
    return defense;
  }

  @Get('/rookies')
  async getRookieAwards(): Promise<Awards_V2[]> {
    const rookies = await this.awardsService.getRookieAwards();

    if (!rookies || rookies.length < 1) {
      throw new NotFoundException('Rookie Awards not found');
    }
    return rookies;
  }

  @Get('/goalies')
  async getGoalieAwards(): Promise<Awards_V2[]> {
    const goalies = await this.awardsService.getGoalieAwards();

    if (!goalies || goalies.length < 1) {
      throw new NotFoundException('Goalie Awards not found');
    }
    return goalies;
  }

  @Get('/gm')
  async getGmAwards(): Promise<Awards_V2[]> {
    const gms = await this.awardsService.getGmAwards();

    if (!gms || gms.length < 1) {
      throw new NotFoundException('GM Awards not found');
    }
    return gms;
  }

  @Get('/season')
  async getSeasonAwards(): Promise<Awards_V2[]> {
    const season = await this.awardsService.getSeasonAwards();

    if (!season || season.length < 1) {
      throw new NotFoundException('Season Awards not found');
    }
    return season;
  }

  @Get('/user/:userId')
  async getTeamAwardsByUserId(@Param() param): Promise<UserAwardDto[]> {
    const awardsByUser = await this.userAwardsService.getAwardsByUserId(
      param.userId
    );

    if (!awardsByUser || awardsByUser.length < 1) {
      throw new NotFoundException('Player Stats not found');
    }
    return awardsByUser;
  }

  @Get('/types')
  async getAwardTypes(): Promise<Award_Type_V2[]> {
    const awardTypes = await this.awardsService.getAwardTypes();

    if (!awardTypes || awardTypes.length < 1) {
      throw new NotFoundException('Award Types not found');
    }
    return awardTypes;
  }
}
