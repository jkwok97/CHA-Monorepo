import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { first } from 'rxjs';
import { GamesAllFacade } from '../../+state/games-all.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-games-all-box-score',
  templateUrl: './games-all-box-score.component.html',
  styleUrls: ['./games-all-box-score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesAllBoxScoreComponent implements OnInit {
  @Input() content!: File | null;

  @Output() closeSidebar = new EventEmitter<boolean>();

  constructor(private gamesAllFacade: GamesAllFacade) {}

  ngOnInit(): void {
    // this.gamesAllFacade.boxScore$
    //   .pipe(untilDestroyed(this))
    //   .subscribe((boxScore: File | null) => {
    //     console.log(boxScore);
    //     this.content = boxScore;
    //     console.log(this.content);
    //   });
  }
}
