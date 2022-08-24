import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class ApiNhlService {
  constructor(private httpService: HttpService) {}

  nhlCOM = 'https://api.nhle.com/stats/rest/en/leaders';

  getNhlLeaders(
    playerType: string,
    statType: string,
    season: string
  ): Observable<AxiosResponse<any[]>> {
    const leaders = this.httpService
      .get(
        `${this.nhlCOM}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2`
      )
      .pipe(map((response) => response.data));

    return leaders;
  }

  getNhlGoalieLeaders(
    playerType: string,
    statType: string,
    season: string,
    minGames: string
  ): Observable<AxiosResponse<any[]>> {
    const leaders = this.httpService
      .get(
        `${this.nhlCOM}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2%20and%20gamesPlayed%20%3E=%20${minGames}`
      )
      .pipe(map((response) => response.data));

    return leaders;
  }
}
