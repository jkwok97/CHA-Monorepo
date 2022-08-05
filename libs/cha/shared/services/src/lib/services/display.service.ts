import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DisplayService {
  checkMobile(): Observable<boolean> {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return of(true);
    } else {
      return of(false);
    }
  }
}
