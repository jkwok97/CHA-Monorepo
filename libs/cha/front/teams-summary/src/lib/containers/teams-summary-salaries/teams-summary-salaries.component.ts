import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  PlayerSalaryModel,
  SalariesAndRatingsDto,
  TeamDto,
} from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, filter, combineLatest, map } from 'rxjs';
import { TeamsSummaryFacade } from '../../+state/summary/teams-summary.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-teams-summary-salaries',
  templateUrl: './teams-summary-salaries.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsSummarySalariesComponent implements OnInit {
  @Input() isMobile!: boolean;

  userTeam$: Observable<TeamDto | undefined>;
  isLoading$: Observable<boolean>;
  forwardSalaries$: Observable<any[]>;
  defenseSalaries$: Observable<any[]>;
  goalieSalaries$: Observable<any[]>;

  forwardSalaries!: PlayerSalaryModel[];
  defenseSalaries!: PlayerSalaryModel[];
  goalieSalaries!: PlayerSalaryModel[];

  salaryHeaders = ['Name', 2023, 2024, 2025, 2026].map((x, i) => ({
    key: x,
    index: i,
  }));

  mobileSalaryHeaders = ['Name', 2023, 2024].map((x, i) => ({
    key: x,
    index: i,
  }));

  constructor(private teamsSummaryFacade: TeamsSummaryFacade) {
    this.userTeam$ = this.teamsSummaryFacade.userTeam$;
    this.isLoading$ = this.teamsSummaryFacade.playerSalaryLoading$;
    this.forwardSalaries$ = this.teamsSummaryFacade.forwardSalaries$;
    this.defenseSalaries$ = this.teamsSummaryFacade.defenseSalaries$;
    this.goalieSalaries$ = this.teamsSummaryFacade.goalieSalaries$;

    this.isLoading$ = combineLatest([
      this.teamsSummaryFacade.goalieSalaryLoaded$,
      this.teamsSummaryFacade.playerSalaryLoading$,
    ]).pipe(
      map(
        ([goaliesLoaded, playerLoading]: [boolean, boolean]) =>
          !goaliesLoaded && playerLoading
      )
    );
  }

  ngOnInit(): void {
    this.forwardSalaries$
      .pipe(
        filter((salaries: SalariesAndRatingsDto[]) => salaries.length > 0),
        untilDestroyed(this)
      )
      .subscribe((salaries: SalariesAndRatingsDto[]) => {
        this.forwardSalaries = salaries.map(
          (salary: SalariesAndRatingsDto) => ({
            Name: `${salary.player_id.firstname} ${salary.player_id.lastname}`,
            2023: salary.salaries.season_2023,
            2024: salary.salaries.season_2024,
            2025: salary.salaries.season_2025,
            2026: salary.salaries.season_2026,
          })
        );
      });

    this.defenseSalaries$
      .pipe(
        filter((salaries: SalariesAndRatingsDto[]) => salaries.length > 0),
        untilDestroyed(this)
      )
      .subscribe((salaries: SalariesAndRatingsDto[]) => {
        this.defenseSalaries = salaries.map(
          (salary: SalariesAndRatingsDto) => ({
            Name: `${salary.player_id.firstname} ${salary.player_id.lastname}`,
            2023: salary.salaries.season_2023,
            2024: salary.salaries.season_2024,
            2025: salary.salaries.season_2025,
            2026: salary.salaries.season_2026,
          })
        );
      });

    this.goalieSalaries$
      .pipe(
        filter((salaries: SalariesAndRatingsDto[]) => salaries.length > 0),
        untilDestroyed(this)
      )
      .subscribe((salaries: SalariesAndRatingsDto[]) => {
        this.goalieSalaries = salaries.map((salary: SalariesAndRatingsDto) => ({
          Name: `${salary.player_id.firstname} ${salary.player_id.lastname}`,
          2023: salary.salaries.season_2023,
          2024: salary.salaries.season_2024,
          2025: salary.salaries.season_2025,
          2026: salary.salaries.season_2026,
        }));
      });
  }
}
