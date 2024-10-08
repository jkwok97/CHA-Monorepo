import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GoalieRatingDto, PlayerRatingDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerMgmtRatingsService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getPlayers(season: string) {
    return this._http
      .get(`${this.apiUrl}/player-ratings/${season}`)
      .pipe(map((result: any) => result));
  }

  editPlayer(player: PlayerRatingDto): Observable<PlayerRatingDto> {
    return this._http
      .put(`${this.apiUrl}/player-ratings/${player.id}`, player)
      .pipe(map((result: any) => result));
  }

  getGoalies(season: string) {
    return this._http
      .get(`${this.apiUrl}/goalie-ratings/${season}`)
      .pipe(map((result: any) => result));
  }

  editGoalie(player: GoalieRatingDto): Observable<GoalieRatingDto> {
    return this._http
      .put(`${this.apiUrl}/goalie-ratings/${player.id}`, player)
      .pipe(map((result: any) => result));
  }

  deletePlayerRating(ratingId: number): Observable<any> {
    return this._http
      .delete(`${this.apiUrl}/player-ratings/${ratingId}`)
      .pipe(map((result: any) => result));
  }
}
