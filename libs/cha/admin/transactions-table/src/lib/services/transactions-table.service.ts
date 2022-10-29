import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EditTradeDto, GetTradeDto } from '@cha/shared/entities';

@Injectable({
  providedIn: 'root',
})
export class TransactionsTableService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getTrades(): Observable<GetTradeDto[]> {
    return this._http
      .get(`${this.apiUrl}/transactions`)
      .pipe(map((result: any) => result));
  }

  editTrade(trade: EditTradeDto) {
    return this._http
      .put(`${this.apiUrl}/transactions/trade/${trade.id}`, trade)
      .pipe(map((result: any) => result));
  }
}
