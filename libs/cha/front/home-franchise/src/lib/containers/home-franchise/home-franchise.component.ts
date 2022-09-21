import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StatTeamsHistoryDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { HomeFranchiseFacade } from '../../+state/home-franchise.facade';

@Component({
  selector: 'cha-front-home-franchise',
  templateUrl: './home-franchise.component.html',
  styleUrls: ['./home-franchise.component.scss'],
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
    height: '77vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '83vh',
  };

  constructor(private homeFranchiseFacade: HomeFranchiseFacade) {
    this.isLoaded$ = this.homeFranchiseFacade.isLoaded$;
    this.isLoading$ = this.homeFranchiseFacade.isLoading$;

    this.allStats$ = this.homeFranchiseFacade.teamStats$;
  }

  ngOnInit(): void {
    this.homeFranchiseFacade.getUserTeamStatsBySeason('Regular');
  }

  onSeasonOptionChanged(option: string) {
    this.homeFranchiseFacade.getUserTeamStatsBySeason(option);
  }
}
