import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-schedule-games-table',
  templateUrl: './schedule-games-table.component.html',
  styleUrls: ['./schedule-games-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleGamesTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
