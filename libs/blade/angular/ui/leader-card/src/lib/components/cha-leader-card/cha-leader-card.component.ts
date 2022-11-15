import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatGoalieLeaderDto, StatPlayerLeaderDto } from '@cha/shared/entities';
import { Avatar, AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'blade-cha-leader-card',
  standalone: true,
  imports: [CommonModule, AvatarModule],
  templateUrl: './cha-leader-card.component.html',
  styleUrls: ['./cha-leader-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BladeChaLeaderCardComponent implements OnInit {
  @Input() leaders!: StatPlayerLeaderDto[] | null;
  @Input() goalieLeaders!: StatGoalieLeaderDto[] | null;
  @Input() type: any;
  @ViewChild('avatar') avatar!: Avatar;

  selected!: any;

  ngOnInit(): void {
    if (this.leaders) {
      this.selected = this.leaders[0];
    } else if (this.goalieLeaders) {
      this.selected = this.goalieLeaders[0];
    }
  }

  onMouseOver(item: StatPlayerLeaderDto) {
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
      return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${this.selected.player_id.nhl_id}@2x.jpg`;
    } else {
      return;
    }
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  getTeamPicture() {
    if (this.selected) {
      return this.getString(this.selected.teamInfo.teamlogo);
    } else {
      return '';
    }
  }

  getPlayerName() {
    if (this.selected) {
      return `${this.selected.player_id.firstname} ${this.selected.player_id.lastname}`;
    } else {
      return;
    }
  }

  getPlayerFirst() {
    if (this.selected) {
      return `${this.selected.player_id.firstname}`;
    } else {
      return;
    }
  }

  getPlayerLast() {
    if (this.selected) {
      return `${this.selected.player_id.lastname}`;
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
        case 'defense points':
        case 'rookie points':
          return this.selected.points;
        case 'assists':
          return this.selected.assists;
        case 'shots':
          return this.selected.shots;
        case 'minutes':
          return this.selected.minutes_played;
        case 'pp goals':
          return this.selected.pp_goals;
        case 'sh goals':
          return this.selected.sh_goals;
        case 'hits':
          return this.selected.hits;
        case 'blocked shots':
          return this.selected.blocked_shots;
        case 'penalty minutes':
          return this.selected.penalty_minutes;
        case '+/-':
          return this.selected.plus_minus;
        case 'current streak':
          return this.selected.current_points_streak;
        case 'longest streak':
          return this.selected.longest_points_streak;
        case 'Goals Against Avg':
          return this.selected.goals_against_avg;
        case 'Save Pct':
          return this.selected.save_pct;
        case 'shutouts':
          return this.selected.shutouts;
        case 'wins':
          return this.selected.wins;
        case 'shots faced':
          return this.selected.shots_for;
        default:
          return '';
      }
    } else {
      return;
    }
  }

  onImageError(event: any) {
    event.target.src = 'assets/images/skater.jpg';
  }
}
