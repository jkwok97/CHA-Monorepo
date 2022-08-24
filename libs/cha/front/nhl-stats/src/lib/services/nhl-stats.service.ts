import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, delay, first, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { NhlPlayerStatDto, NhlGoalieStatDto } from '@cha/shared/entities';

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
            skaters: result['data']['player_stats']['skaters'],
            goalies: result['data']['player_stats']['goalies'],
          };
        }),
        delay(500)
      );
  }

  //   getNHLsummary(
  //     season: string,
  //     player: string,
  //     statsType: string,
  //     sort: string,
  //     start: number,
  //     pageSize: number
  //   ): Observable<{ stats: NhlPlayerStatDto[]; total: number }> {
  //     const options = {
  //       params: new HttpParams()
  //         .set('season', season)
  //         .set('playerType', player)
  //         .set('statsType', statsType)
  //         .set('sort', sort)
  //         .set('start', start)
  //         .set('pageSize', pageSize),
  //     };
  //     return this._http.get(`${this.apiUrl}/nhl/nhl-leaders/summary`, options).pipe(
  //       map((result: any) => {
  //         result['data'].forEach(
  //           (stat: NhlPlayerStatDto) =>
  //             (stat = this.getPlayerStatsWithChaLogo(stat))
  //         );
  //         return { stats: result['data'], total: result['total'] };
  //         // return result['data'];
  //       }),
  //       delay(500)
  //     );
  //   }

  //   getNHLGoaliesummary(
  //     season: string,
  //     player: string,
  //     statsType: string,
  //     sort: string,
  //     start: number,
  //     pageSize: number
  //   ): Observable<{ stats: NhlGoalieStatDto[]; total: number }> {
  //     const options = {
  //       params: new HttpParams()
  //         .set('season', season)
  //         .set('playerType', player)
  //         .set('statsType', statsType)
  //         .set('sort', sort)
  //         .set('start', start)
  //         .set('pageSize', pageSize),
  //     };
  //     return this._http.get(`${this.apiUrl}/nhl-leaders/summary`, options).pipe(
  //       map((result: any) => {
  //         result['data'].forEach(
  //           (stat: NhlGoalieStatDto) =>
  //             (stat = this.getGoalieStatsWithChaLogo(stat))
  //         );
  //         return { stats: result['data'], total: result['total'] };
  //       }),
  //       delay(1000)
  //     );
  //   }

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
        `${this.apiUrl}/nhl-summary/rookies/${season}/${player}/${statsType}/${sort}/${start}/${pageSize}`
      )
      .pipe(
        map((result: any) => {
          result['data'].forEach(
            (stat: NhlPlayerStatDto) =>
              (stat = this.getPlayerStatsWithChaLogo(stat))
          );
          return { stats: result['data'], total: result['total'] };
        }),
        delay(500)
      );
  }

  getPlayerStatsWithChaLogo(stat: NhlPlayerStatDto): NhlPlayerStatDto {
    stat = {
      ...stat,
      // chaTeam: this.getPlayerTeamLogo(stat.playerId).pipe(
      //   map((logo) => (logo.teamlogo ? logo.teamlogo : ''))
      // ),
    };

    return stat;

    // this.getPlayerTeamLogo(stat.playerId)
    //   .pipe(first(), delay(100))
    //   .subscribe((logo) => {
    //     if (logo && logo.teamlogo) {
    //       stat = {
    //         ...stat,
    //         chaTeam: logo.teamlogo,
    //       };
    //     } else {
    //       stat = {
    //         ...stat,
    //         chaTeam: '',
    //       };
    //     }
    //   });
  }

  getPlayerTeamLogo(nhlId: number): Observable<{ teamlogo: string }> {
    return this._http
      .get(`${this.apiUrl}/v2/players/nhl/${nhlId}`)
      .pipe(map((result: any) => result['result']));
  }

  getGoalieStatsWithChaLogo(stat: NhlGoalieStatDto): NhlGoalieStatDto {
    this.getGoalieTeamLogo(stat.playerId)
      .pipe(
        first(),
        catchError(() => of(null))
      )
      .subscribe((logo) => {
        if (logo && logo.teamlogo) {
          stat.chaTeam = logo.teamlogo;
        } else {
          stat.chaTeam = '';
        }
      });
    return stat;
  }

  getGoalieTeamLogo(nhlId: number): Observable<{ teamlogo: string }> {
    return this._http
      .get(`${this.apiUrl}/v2/goalies/nhl/${nhlId}`)
      .pipe(map((result: any) => result['result']));
  }
}
