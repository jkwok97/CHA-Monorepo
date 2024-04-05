import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class ApiPlayerNhlStatsService {
  constructor(private httpService: HttpService) {}

  nhlAPI = 'https://api-web.nhle.com/v1/player';
  sportsNet = 'https://mobile-statsv2.sportsnet.ca/web_player_table';

  getNhlSummaryFromSportsnet(
    season: string,
    seasonType: string
  ): Observable<{ player_stats: { skaters: any[]; goalies: any[] } }> {
    const leaders = this.httpService
      .get(
        `${this.sportsNet}?league=nhl&season=${season}&season_type=${seasonType}`
      )
      .pipe(map((response) => response.data));

    return leaders;
  }

  getNhlPlayerPointsByPlayerId(
    playerId: number,
    playingYear: string
  ): Observable<AxiosResponse<any[]>> {
    const stats = this.httpService
      .get(`${this.nhlAPI}/${playerId}/landing`)
      .pipe(map((response) => response.data));

    return stats;
  }
}
