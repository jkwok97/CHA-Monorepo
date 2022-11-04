import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'cha-front-games-all-box-score',
  templateUrl: './games-all-box-score.component.html',
  styleUrls: ['./games-all-box-score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesAllBoxScoreComponent {
  @Input() content!: File | null;

  @Output() closeSidebar = new EventEmitter<boolean>();
}
