import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { HomeSummaryFacade } from '../../+state/home-summary.facade';

@Component({
  selector: 'cha-front-home-summary-depth-chart-item-sidebar',
  templateUrl: './home-summary-depth-chart-item-sidebar.component.html',
  styleUrls: ['./home-summary-depth-chart-item-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryDepthChartItemSidebarComponent implements OnInit {
  @Input() playerStats: any;

  constructor(private homeSummaryFacade: HomeSummaryFacade) {
    console.log(this.playerStats);
  }

  ngOnInit(): void {
    console.log(this.playerStats);
    if (this.playerStats.player_id.isgoalie) {
      this.homeSummaryFacade.getCHACurrentGoalieStats(this.playerStats.player_id.id);
    } else {
      this.homeSummaryFacade.getCHACurrentPlayerStats(this.playerStats.player_id.id);
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
