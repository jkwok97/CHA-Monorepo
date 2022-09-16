import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { first, Observable, of } from 'rxjs';

@Component({
  selector: 'cha-front-home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  isMobile = false;

  constructor(private displayFacade: DisplayFacade) {
    this.isLoaded$ = of(true);
    this.isLoading$ = of(false);

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {}
}
