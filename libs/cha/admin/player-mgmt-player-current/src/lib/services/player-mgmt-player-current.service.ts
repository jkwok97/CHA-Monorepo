import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CreateStatPlayerAllDto, StatPlayerAllDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerMgmtPlayerCurrentService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getPlayers(season: string) {
    return this._http
      .get(`${this.apiUrl}/player-stats/${season}`)
      .pipe(map((result: any) => result));
  }

  addPlayer(player: CreateStatPlayerAllDto): Observable<StatPlayerAllDto> {
    const body = player;
    return this._http
      .post(`${this.apiUrl}/player-stats/add`, body)
      .pipe(map((result: any) => result));
  }

  editPlayer(
    player: StatPlayerAllDto,
    season: string
  ): Observable<StatPlayerAllDto> {
    return this._http
      .put(
        `${this.apiUrl}/player-stats/${season}/${player.player_id.id}`,
        player
      )
      .pipe(map((result: any) => result));
  }

  deletePlayer(playerId: number, season: string): Observable<StatPlayerAllDto> {
    return this._http
      .delete(`${this.apiUrl}/player-stats/${season}/${playerId}`)
      .pipe(map((result: any) => result));
  }
}
