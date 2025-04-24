import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Avatar, AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';

import { AwardDto, AwardTypeEnum } from '@cha/shared/entities';

@Component({
  selector: 'blade-award-card',
  standalone: true,
  imports: [CommonModule, AvatarModule, DividerModule],
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BladeAwardCardComponent {
  @Input()
  award!: AwardDto;
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
