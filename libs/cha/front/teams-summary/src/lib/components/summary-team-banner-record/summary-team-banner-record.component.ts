import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StatUserTeamRecordDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-front-summary-team-banner-record',
  templateUrl: './summary-team-banner-record.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryTeamBannerRecordComponent {
  @Input() teamRecord!: StatUserTeamRecordDto;
  @Input() isMobile!: boolean;
}
