import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { UserAwardDto } from '@cha/shared/entities';
import { Observable, first } from 'rxjs';
import { HomeAwardsFacade } from '../../+state/home-awards.facade';

@Component({
  selector: 'cha-front-home-awards',
  templateUrl: './home-awards.component.html',
  styleUrls: ['./home-awards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeAwardsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  awards$: Observable<UserAwardDto[]>;

  isMobile = false;
  panelStyleMobile = {
    width: '100%',
    height: '85vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '90vh',
  };

  constructor(
    private displayFacade: DisplayFacade,
    private homeAwardsFacade: HomeAwardsFacade
  ) {
    this.isLoaded$ = this.homeAwardsFacade.isLoaded$;
    this.isLoading$ = this.homeAwardsFacade.isLoading$;
    this.awards$ = this.homeAwardsFacade.awards$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    this.homeAwardsFacade.getUserAwards();
  }
}
