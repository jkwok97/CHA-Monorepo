import { Awards_V2 } from '@api/entities';
import { UserAwardDto } from '@cha/shared/entities';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiUserAwardsService } from '../services';
import { ApiAwardsService } from '../services/api-awards.service';

@Controller('awards')
export class AwardsController {
  constructor(
    private awardsService: ApiAwardsService,
    private userAwardsService: ApiUserAwardsService
  ) {}

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

  // @Get('/player/:id')
  // getPlayerAwardsByPlayerId() {}

  // @Get('/goalie/:id')
  // getGoalieAwardsByPlayerId() {}

  // @Get('/award-types')
  // getAwardTypes() {}

  // @Post('/add')
  // addAwardWinner() {}

  // @Put('/winners/:id')
  // editAwardWinnerById() {}

  // @Delete('/winners/:id')
  // deleteAwardWinnerById() {}
}
