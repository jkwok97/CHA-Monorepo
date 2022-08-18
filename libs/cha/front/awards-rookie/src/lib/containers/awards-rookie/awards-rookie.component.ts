import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AwardsFacade } from '@cha/domain/core';
import { AwardDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-awards-rookie',
  templateUrl: './awards-rookie.component.html',
  styleUrls: ['./awards-rookie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsRookieComponent implements OnInit {
  rookies$: Observable<AwardDto[]>;
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private awardsFacade: AwardsFacade) {
    this.rookies$ = this.awardsFacade.awards$;
    this.isLoading$ = this.awardsFacade.isLoading$;
    this.isLoaded$ = this.awardsFacade.isLoaded$;
  }

  ngOnInit(): void {
    this.awardsFacade.getRookies();
  }
}
