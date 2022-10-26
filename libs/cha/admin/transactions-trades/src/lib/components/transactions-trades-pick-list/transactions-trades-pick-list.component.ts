import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { LeagueDataFacade } from '@cha/domain/core';
import { filter, first } from 'rxjs';

@Component({
  selector: 'cha-admin-transactions-trades-pick-list',
  templateUrl: './transactions-trades-pick-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTradesPickListComponent implements OnInit {
  @Input() isMobile!: boolean;

  teamOneOptions!: any[];
  teamTwoOptions!: any[];
  teamOne!: string;
  teamTwo!: string;
  teamOnePicks!: string[];
  teamTwoPicks!: string[];

  constructor(private leagueDataFacade: LeagueDataFacade) {}

  ngOnInit(): void {
    this.leagueDataFacade.leagueTeamsOptions$
      .pipe(
        filter((options) => options.length > 0),
        first()
      )
      .subscribe((options) => {
        this.teamOneOptions = options.map((option) => ({
          ...option,
          disabled: option.value === 'FA',
        }));

        this.teamTwoOptions = options.map((option) => ({
          ...option,
          disabled: false,
        }));
      });
  }

  setTeamOneSelection(team: string) {
    this.teamOne = team;
    this.teamTwoOptions = this.teamTwoOptions.map((option) => ({
      ...option,
      disabled: option.value === team,
    }));
  }

  setTeamTwoSelection(team: string) {
    this.teamTwo = team;
    this.teamOneOptions = this.teamOneOptions.map((option) => ({
      ...option,
      disabled: option.value === team || option.value === 'FA',
    }));
  }

  setTeamOnePicks(picks: string[]) {
    this.teamOnePicks = picks;
  }

  setTeamTwoPicks(picks: string[]) {
    this.teamTwoPicks = picks;
  }
}
