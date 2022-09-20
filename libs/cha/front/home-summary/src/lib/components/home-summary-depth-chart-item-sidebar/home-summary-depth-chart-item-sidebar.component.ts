import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { StatGoalieAllDto, StatPlayerAllDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { HomeSummaryFacade } from '../../+state/home-summary.facade';

@Component({
  selector: 'cha-front-home-summary-depth-chart-item-sidebar',
  templateUrl: './home-summary-depth-chart-item-sidebar.component.html',
  styleUrls: ['./home-summary-depth-chart-item-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartItemSidebarComponent implements OnInit {
  @Input() playerStats: any;

  currentStat$!: Observable<StatPlayerAllDto | StatGoalieAllDto>;

  constructor(private homeSummaryFacade: HomeSummaryFacade) {}

  ngOnInit(): void {
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

    // this.homeSummaryFacade.getNHLCurrentStats(this.playerStats.player_id.id);
  }

  getPlayerPicture(id: string | undefined) {
    if (id) {
      return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${id}@2x.jpg`;
    } else {
      return '';
    }
  }
}
