import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DisplayFacade } from '@cha/domain/core';
import { StatTeamsHistoryDto } from '@cha/shared/entities';
import { first, Observable } from 'rxjs';
import { HomeFranchiseFacade } from '../../+state/home-franchise.facade';

@Component({
  selector: 'cha-front-home-franchise',
  templateUrl: './home-franchise.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFranchiseComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  allStats$: Observable<StatTeamsHistoryDto[]>;

  seasonOption = 'Regular';

  selectSeasonOptions = [
    { label: 'Regular', value: 'Regular' },
    { label: 'Playoffs', value: 'Playoffs' },
  ];

  isMobile = false;

  panelStyleMobile = {
    width: '100%',
    height: '88vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '90vh',
  };

  constructor(
    private homeFranchiseFacade: HomeFranchiseFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoaded$ = this.homeFranchiseFacade.isLoaded$;
    this.isLoading$ = this.homeFranchiseFacade.isLoading$;

    this.allStats$ = this.homeFranchiseFacade.teamStats$;

    this.displayFacade.isMobile$
      .pipe(first())
      .subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      });
  }

  ngOnInit(): void {
    this.homeFranchiseFacade.getUserTeamStatsBySeason('Regular');
  }

  onSeasonOptionChanged(option: string) {
    this.homeFranchiseFacade.getUserTeamStatsBySeason(option);
  }
}
