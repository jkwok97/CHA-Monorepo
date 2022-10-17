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

  getPlayers() {
    return this._http
      .get(`${this.apiUrl}/player-stats`)
      .pipe(map((result: any) => result));
  }

  addPlayer(player: CreateStatPlayerAllDto): Observable<StatPlayerAllDto> {
    const body = player;
    return this._http
      .post(`${this.apiUrl}/player-stats/add`, body)
      .pipe(map((result: any) => result));
  }

  editPlayer(player: StatPlayerAllDto): Observable<StatPlayerAllDto> {
    return this._http
      .put(`${this.apiUrl}/player-stats/${player.player_id.id}`, player)
      .pipe(map((result: any) => result));
  }

  deletePlayer(playerId: number): Observable<StatPlayerAllDto> {
    return this._http
      .delete(`${this.apiUrl}/player-stats/${playerId}`)
      .pipe(map((result: any) => result));
  }
}
