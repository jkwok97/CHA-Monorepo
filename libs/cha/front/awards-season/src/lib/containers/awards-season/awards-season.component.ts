import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AwardsFacade } from '@cha/domain/core';
import { AwardDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-awards-season',
  templateUrl: './awards-season.component.html',
  styleUrls: ['./awards-season.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsSeasonComponent implements OnInit {
  season$: Observable<AwardDto[]>;
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private awardsFacade: AwardsFacade) {
    this.season$ = this.awardsFacade.awards$;
    this.isLoading$ = this.awardsFacade.isLoading$;
    this.isLoaded$ = this.awardsFacade.isLoaded$;
  }

  ngOnInit(): void {
    this.awardsFacade.getSeason();
  }
}
