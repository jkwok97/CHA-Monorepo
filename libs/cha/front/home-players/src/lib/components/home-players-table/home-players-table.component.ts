import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-home-players-table',
  templateUrl: './home-players-table.component.html',
  styleUrls: ['./home-players-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePlayersTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
