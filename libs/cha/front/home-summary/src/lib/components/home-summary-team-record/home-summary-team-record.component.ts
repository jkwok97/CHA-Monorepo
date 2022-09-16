import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StatUserTeamRecordDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-home-summary-team-record',
  templateUrl: './home-summary-team-record.component.html',
  styleUrls: ['./home-summary-team-record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSummaryTeamRecordComponent {
  @Input() teamRecord!: StatUserTeamRecordDto;
  @Input() isMobile!: boolean;
}
