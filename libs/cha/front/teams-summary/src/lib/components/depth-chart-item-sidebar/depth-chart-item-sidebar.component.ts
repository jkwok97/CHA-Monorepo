import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  StatPlayerAllDto,
  StatGoalieAllDto,
  NhlGoalieStatDto,
  NhlPlayerStatDto,
} from '@cha/shared/entities';
import { Observable } from 'rxjs';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';
import { LeagueDataFacade } from '@cha/domain/core';

@Component({
  selector: 'cha-front-depth-chart-item-sidebar',
  templateUrl: './depth-chart-item-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartItemSidebarComponent implements OnInit, OnChanges {
  @Input() playerStats: any;
  @Input() isMobile!: boolean;

  currentStat$!: Observable<StatPlayerAllDto | StatGoalieAllDto | null>;
  currentNhlStat$!: Observable<NhlGoalieStatDto | NhlPlayerStatDto | null>;
  statsLoading$: Observable<boolean>;
  isOffSeason$: Observable<boolean>;

  constructor(
    private teamsSummaryFacade: TeamsSummaryFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.statsLoading$ = this.teamsSummaryFacade.statsLoading$;
    this.isOffSeason$ = this.leagueDataFacade.isOffSeason$;
  }

  ngOnInit(): void {
    this.setSidebarInfo();
    this.currentNhlStat$ = this.teamsSummaryFacade.currentNHLStats$;
  }

  setSidebarInfo() {
    if (this.playerStats.player_id.isgoalie) {
      this.teamsSummaryFacade.getCHACurrentGoalieStats(
        this.playerStats.player_id.id
      );
      this.currentStat$ = this.teamsSummaryFacade.currentGoalieCHAStats$;
    } else {
      this.teamsSummaryFacade.getCHACurrentPlayerStats(
        this.playerStats.player_id.id
      );
      this.currentStat$ = this.teamsSummaryFacade.currentPlayerCHAStats$;
    }

    this.teamsSummaryFacade.getNHLCurrentStats(
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
