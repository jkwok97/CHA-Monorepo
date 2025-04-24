import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Avatar, AvatarModule } from 'primeng/avatar';
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
  @ViewChild('avatar') avatar!: Avatar;

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
    return `https://assets.nhle.com/mugs/nhl/latest/${id}.png`;
  }

  onImageError(event: any) {
    event.target.src = 'assets/images/skater.jpg';
  }
}
