import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { AwardTypeEnum, UserAwardDto } from '@cha/shared/entities';

@Component({
  selector: 'blade-user-award-card',
  standalone: true,
  imports: [CommonModule, AvatarModule, DividerModule],
  templateUrl: './user-award-card.component.html',
  styleUrls: ['./user-award-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BladeUserAwardCardComponent {
  @Input()
  award!: UserAwardDto;

  AwardTypeEnum = AwardTypeEnum;

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  getColor(color: string) {
    return `${color}95`;
  }

  getPlayerPicture(id: string | undefined) {
    return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${id}@2x.jpg`;
  }
}
