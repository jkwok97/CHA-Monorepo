import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NhlPlayerStatDto } from '@cha/shared/entities';

@Injectable()
export class NhlStatsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getNHLSummarySportsnet(
    season: string,
    seasonType: string
  ): Observable<{ skaters: any[]; goalies: any[] }> {
    return this._http
      .get(`${this.apiUrl}/nhl/nhl-summary/sportsnet/${season}/${seasonType}`)
      .pipe(
        map((result: any) => {
          return {
            skaters: result['player_stats']['skaters'],
            goalies: result['player_stats']['goalies'],
          };
        }),
        delay(500)
      );
  }

  getNHLRookiesummary(
    season: string,
    player: string,
    statsType: string,
    sort: string,
    start: number,
    pageSize: number
  ): Observable<{ stats: NhlPlayerStatDto[]; total: number }> {
    return this._http
      .get(
        `${this.apiUrl}/nhl/nhl-summary/rookies/${season}/${player}/${statsType}/${sort}/${start}/${pageSize}`
      )
      .pipe(
        map((result: any) => {
          return { stats: result['data'], total: result['total'] };
        }),
        delay(500)
      );
  }
}
