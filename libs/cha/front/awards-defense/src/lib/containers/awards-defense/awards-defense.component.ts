import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AwardsFacade } from '@cha/domain/core';
import { AwardDto } from '@cha/shared/entities';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-front-awards-defense',
  templateUrl: './awards-defense.component.html',
  styleUrls: ['./awards-defense.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsDefenseComponent implements OnInit {
  defense$: Observable<AwardDto[]>;
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private awardsFacade: AwardsFacade) {
    this.defense$ = this.awardsFacade.awards$;
    this.isLoading$ = this.awardsFacade.isLoading$;
    this.isLoaded$ = this.awardsFacade.isLoaded$;
  }

  ngOnInit(): void {
    this.awardsFacade.getDefense();
  }
}
