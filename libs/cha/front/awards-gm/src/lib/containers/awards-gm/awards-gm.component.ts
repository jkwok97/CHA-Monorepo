import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AwardsFacade } from '@cha/domain/core';
import { AwardDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-awards-gm',
  templateUrl: './awards-gm.component.html',
  styleUrls: ['./awards-gm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsGmComponent implements OnInit {
  gm$: Observable<AwardDto[]>;
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private awardsFacade: AwardsFacade) {
    this.gm$ = this.awardsFacade.awards$;
    this.isLoading$ = this.awardsFacade.isLoading$;
    this.isLoaded$ = this.awardsFacade.isLoaded$;
  }

  ngOnInit(): void {
    this.awardsFacade.getGm();
  }
}
