import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-league-divisions-edit-form',
  templateUrl: './league-divisions-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDivisionsEditFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
