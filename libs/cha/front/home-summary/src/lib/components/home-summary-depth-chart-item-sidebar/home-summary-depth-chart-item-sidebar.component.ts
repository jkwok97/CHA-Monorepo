import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  NhlGoalieStatDto,
  NhlPlayerStatDto,
  StatGoalieAllDto,
  StatPlayerAllDto,
} from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { HomeSummaryFacade } from '../../+state/home-summary.facade';

@Component({
  selector: 'cha-front-home-summary-depth-chart-item-sidebar',
  templateUrl: './home-summary-depth-chart-item-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartItemSidebarComponent
  implements OnInit, OnChanges
{
  @Input() playerStats: any;
  @Input() isMobile!: boolean;

  currentStat$!: Observable<StatPlayerAllDto | StatGoalieAllDto>;
  currentNhlStat$!: Observable<NhlGoalieStatDto | NhlPlayerStatDto>;
  statsLoading$: Observable<boolean>;

  constructor(private homeSummaryFacade: HomeSummaryFacade) {
    this.statsLoading$ = this.homeSummaryFacade.statsLoading$;
  }

  ngOnInit(): void {
    this.setSidebarInfo();
    this.currentNhlStat$ = this.homeSummaryFacade.currentNHLStats$;
  }

  setSidebarInfo() {
    if (this.playerStats.player_id.isgoalie) {
      this.homeSummaryFacade.getCHACurrentGoalieStats(
        this.playerStats.player_id.id
      );
      this.currentStat$ = this.homeSummaryFacade.currentGoalieCHAStats$;
    } else {
      this.homeSummaryFacade.getCHACurrentPlayerStats(
        this.playerStats.player_id.id
      );
      this.currentStat$ = this.homeSummaryFacade.currentPlayerCHAStats$;
    }

    this.homeSummaryFacade.getNHLCurrentStats(
      this.playerStats.player_id.nhl_id
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setSidebarInfo();
  }

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${id}@2x.jpg`;
    } else {
      return '';
    }
  }
}
