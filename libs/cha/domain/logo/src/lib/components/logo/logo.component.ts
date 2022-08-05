import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ChaLogoEnum } from '@cha/shared/entities';

@Component({
  selector: 'cha-logo',
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class LogoComponent implements OnInit {
  @Input() logo: ChaLogoEnum | undefined;
  @Input() width = 75;
  @Input() height = 75;
  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  @Input() userTeamLogo!: string | undefined;

  teamLogo = '/assets';

  ngOnInit(): void {
    // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
    if (this.userTeamLogo) {
      this.teamLogo = `/assets/${this.getString(this.userTeamLogo)}`;
    } else if (this.logo) {
      this.teamLogo = `/assets/${this.logo}`;
    }
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return temp[temp.length - 1];
  }
}
