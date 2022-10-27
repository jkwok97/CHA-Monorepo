import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-schedule-games-edit',
  templateUrl: './schedule-games-edit.component.html',
  styleUrls: ['./schedule-games-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleGamesEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
