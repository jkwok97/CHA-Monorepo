import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SalaryAllDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerMgmtSalariesService {
  constructor(
    private _http: HttpClient,
    @Inject('apiUrl') private apiUrl: string
  ) {}

  getSalaries() {
    return this._http
      .get(`${this.apiUrl}/salaries`)
      .pipe(map((result: any) => result));
  }

  editSalary(salary: SalaryAllDto): Observable<SalaryAllDto> {
    return this._http
      .put(`${this.apiUrl}/salaries/${salary.id}`, salary)
      .pipe(map((result: any) => result));
  }
}
