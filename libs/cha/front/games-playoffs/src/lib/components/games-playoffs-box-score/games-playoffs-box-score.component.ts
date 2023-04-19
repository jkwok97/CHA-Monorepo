import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { GamesPlayoffsFacade } from '../../+state/games-playoffs.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-games-playoffs-box-score',
  templateUrl: './games-playoffs-box-score.component.html',
  styleUrls: ['./games-playoffs-box-score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesPlayoffsBoxScoreComponent {
  @Input() isMobile!: boolean;
  @Output() closeSidebar = new EventEmitter<boolean>();

  isLoading$: Observable<boolean>;

  content!: File | null;

  constructor(private gamesPlayoffsFacade: GamesPlayoffsFacade) {
    this.isLoading$ = this.gamesPlayoffsFacade.gameLoading$;
  }

  ngOnInit(): void {
    this.gamesPlayoffsFacade.boxScore$
      .pipe(untilDestroyed(this))
      .subscribe((game: File | null) => {
        if (game) {
          this.content = game;
        }
      });
  }

  onClose() {
    this.closeSidebar.emit(true);
  }
}
