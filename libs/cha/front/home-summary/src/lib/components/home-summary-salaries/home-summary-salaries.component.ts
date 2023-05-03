import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserTeamFacade } from '@cha/domain/core';
import {
  TeamDto,
  PlayerSalaryModel,
  SalariesAndRatingsDto,
} from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, combineLatest, map, filter } from 'rxjs';
import { HomeSummaryFacade } from '../../+state/home-summary.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-home-summary-salaries',
  templateUrl: './home-summary-salaries.component.html',
  styleUrls: ['./home-summary-salaries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummarySalariesComponent implements OnInit {
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

  constructor(
    private homeSummaryFacade: HomeSummaryFacade,
    private userTeamFacade: UserTeamFacade
  ) {
    this.userTeam$ = this.userTeamFacade.currentUserTeam$;
    this.isLoading$ = this.homeSummaryFacade.playerSalaryLoading$;
    this.forwardSalaries$ = this.homeSummaryFacade.forwardSalaries$;
    this.defenseSalaries$ = this.homeSummaryFacade.defenseSalaries$;
    this.goalieSalaries$ = this.homeSummaryFacade.goalieSalaries$;

    this.isLoading$ = combineLatest([
      this.homeSummaryFacade.goalieSalaryLoaded$,
      this.homeSummaryFacade.playerSalaryLoading$,
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
