import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'blade-schedule-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule-team-card.component.html',
  styleUrls: ['./schedule-team-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleTeamCardComponent {}
