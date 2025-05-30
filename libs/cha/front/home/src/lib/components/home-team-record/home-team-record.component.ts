import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StatUserTeamRecordDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-home-team-record',
  templateUrl: './home-team-record.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTeamRecordComponent {
  @Input() teamRecord!: StatUserTeamRecordDto;
  @Input() isMobile!: boolean;
}
