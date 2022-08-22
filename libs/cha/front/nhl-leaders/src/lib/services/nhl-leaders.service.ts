import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Injectable()
export class NhlLeadersService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getAllLeaders(season: string) {
    return combineLatest([
      this.getNhlLeaders(season, 'skater', 'points'),
      this.getNhlLeaders(season, 'skater', 'goals'),
      this.getNhlLeaders(season, 'skater', 'assists'),
      this.getNhlRookieLeaders(season, 'skater', 'points'),
      this.getNhlRookieLeaders(season, 'skater', 'goals'),
      this.getNhlRookieLeaders(season, 'skater', 'assists'),
      this.getNhlLeaders(season, 'goalie', 'gaa'),
      this.getNhlLeaders(season, 'goalie', 'savePctg'),
      this.getNhlLeaders(season, 'goalie', 'shutouts'),
      this.getNhlDefenseLeaders(season, 'skater', 'points'),
      this.getNhlDefenseLeaders(season, 'skater', 'goals'),
      this.getNhlDefenseLeaders(season, 'skater', 'assists'),
    ]).pipe(
      map(
        ([
          points,
          goals,
          assists,
          rookiePoints,
          rookieGoals,
          rookieAssists,
          gaa,
          savePct,
          shutouts,
          defensePoints,
          defenseGoals,
          defenseAssists,
        ]) => ({
          points,
          goals,
          assists,
          rookiePoints,
          rookieGoals,
          rookieAssists,
          gaa,
          savePct,
          shutouts,
          defensePoints,
          defenseGoals,
          defenseAssists,
        })
      )
    );
  }

  private getNhlLeaders(season: string, player: string, stat: string) {
    return this._http
      .get(`${this.apiUrl}/nhl-leaders/${season}/${player}/${stat}`)
      .pipe(map((result: any) => result['data']));
  }

  private getNhlRookieLeaders(season: string, player: string, stat: string) {
    return this._http
      .get(`${this.apiUrl}/nhl-rookie-leaders//${season}/${player}/${stat}`)
      .pipe(map((result: any) => result['data']));
  }

  private getNhlDefenseLeaders(season: string, player: string, stat: string) {
    return this._http
      .get(`${this.apiUrl}/nhl-defense-leaders//${season}/${player}/${stat}`)
      .pipe(map((result: any) => result['data']));
  }
}
