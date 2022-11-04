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
import { GamesCurrentFacade } from '../../+state/games-current.facade';

@UntilDestroy()
@Component({
  selector: 'cha-front-games-current-box-score',
  templateUrl: './games-current-box-score.component.html',
  styleUrls: ['./games-current-box-score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesCurrentBoxScoreComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Output() closeSidebar = new EventEmitter<boolean>();

  isLoading$: Observable<boolean>;

  content!: File | null;

  constructor(private gamesCurrentFacade: GamesCurrentFacade) {
    this.isLoading$ = this.gamesCurrentFacade.gameLoading$;
  }

  ngOnInit(): void {
    this.gamesCurrentFacade.boxScore$
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
