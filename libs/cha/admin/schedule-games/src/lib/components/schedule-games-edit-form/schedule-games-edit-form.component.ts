import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-schedule-games-edit-form',
  templateUrl: './schedule-games-edit-form.component.html',
  styleUrls: ['./schedule-games-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleGamesEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
