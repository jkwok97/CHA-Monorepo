import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScheduleAllDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-games-all-table',
  templateUrl: './games-all-table.component.html',
  styleUrls: ['./games-all-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesAllTableComponent {
  @Input() schedule!: ScheduleAllDto[];
}
