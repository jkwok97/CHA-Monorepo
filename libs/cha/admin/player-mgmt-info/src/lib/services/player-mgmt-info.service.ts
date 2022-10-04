import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PlayerCreateDto, PlayerDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerMgmtInfoService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getPlayers() {
    return this._http
      .get(`${this.apiUrl}/player-info`)
      .pipe(map((result: any) => result));
  }

  addPlayer(player: PlayerCreateDto): Observable<PlayerDto> {
    const body = player;
    return this._http
      .post(`${this.apiUrl}/player-info/add`, body)
      .pipe(map((result: any) => result));
  }

  editPlayer(player: PlayerDto): Observable<PlayerDto> {
    return this._http
      .put(`${this.apiUrl}/player-info/${player.id}`, player)
      .pipe(map((result: any) => result));
  }

  deletePlayer(playerId: number): Observable<PlayerDto> {
    return this._http
      .delete(`${this.apiUrl}/player-info/${playerId}`)
      .pipe(map((result: any) => result));
  }
}
