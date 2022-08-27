import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NhlPlayerDto, NhlGoalieDto } from '@cha/shared/entities';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'blade-nhl-leader-card',
  standalone: true,
  imports: [CommonModule, AvatarModule],
  templateUrl: './nhl-leader-card.component.html',
  styleUrls: ['./nhl-leader-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BladeNhlLeaderCardComponent implements OnInit {
  @Input() leaders!: NhlPlayerDto[] | null;
  @Input() goalieLeaders!: NhlGoalieDto[] | null;
  @Input() type: any;

  selected!: any;

  ngOnInit(): void {
    if (this.leaders) {
      this.selected = this.leaders[0];
    } else if (this.goalieLeaders) {
      this.selected = this.goalieLeaders[0];
    }
  }

  onMouseOver(item: NhlPlayerDto) {
    this.selected = item;
  }

  onMouseOut() {
    if (this.leaders) {
      this.selected = this.leaders[0];
    } else if (this.goalieLeaders) {
      this.selected = this.goalieLeaders[0];
    }
  }

  getPlayerPicture() {
    if (this.selected) {
      return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${this.selected.player.id}@2x.jpg`;
    } else {
      return;
    }
  }

  getTeamPicture() {
    if (this.selected) {
      return this.selected.team.logos.find(
        (logo: any) =>
          logo.endSeason === 20222023 && logo.background === 'light'
      )?.secureUrl;
    } else {
      return;
    }
  }

  getPlayerNumber() {
    if (this.selected) {
      return `#${this.selected.player.sweaterNumber}`;
    } else {
      return;
    }
  }

  getPlayerName() {
    if (this.selected) {
      return `${this.selected.player.fullName}`;
    } else {
      return;
    }
  }

  getPlayerFirst() {
    if (this.selected) {
      return `${this.selected.player.firstName}`;
    } else {
      return;
    }
  }

  getPlayerLast() {
    if (this.selected) {
      return `${this.selected.player.lastName}`;
    } else {
      return;
    }
  }

  getPlayerStat() {
    if (this.selected) {
      switch (this.type) {
        case 'goals':
          return this.selected.goals;
        case 'points':
          return this.selected.points;
        case 'assists':
          return this.selected.assists;
        case 'gaa':
          return this.selected.gaa.toFixed(2);
        case 'savePct':
          return this.selected.savePctg;
        case 'shutouts':
          return this.selected.shutouts;
        default:
          return '';
      }
    } else {
      return;
    }
  }
}