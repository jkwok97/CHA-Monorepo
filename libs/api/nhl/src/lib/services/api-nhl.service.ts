import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiNhlService {
  constructor(private httpService: HttpService) {}

  nhlCOM = 'https://api.nhle.com/stats/rest/en/leaders';

  async getNhlLeaders(
    playerType: string,
    statType: string,
    season: string
  ): Promise<any> {
    const leaders = this.httpService.get(
      `${this.nhlCOM}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2`
    );
    return leaders;
  }
}
