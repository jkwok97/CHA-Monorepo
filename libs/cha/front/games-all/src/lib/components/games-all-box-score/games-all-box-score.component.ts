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
import { GamesAllFacade } from '../../+state/games-all.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-games-all-box-score',
  templateUrl: './games-all-box-score.component.html',
  styleUrls: ['./games-all-box-score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesAllBoxScoreComponent implements OnInit {
  @Output() closeSidebar = new EventEmitter<boolean>();

  isLoading$: Observable<boolean>;

  content!: File | null;

  constructor(private gamesAllFacade: GamesAllFacade) {
    this.isLoading$ = this.gamesAllFacade.gameLoading$;
  }

  ngOnInit(): void {
    this.gamesAllFacade.boxScore$
      .pipe(untilDestroyed(this))
      .subscribe((game: File | null) => {
        if (game) {
          this.content = game;
        }
      });
  }
}
