import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-home-players-table-sidebar',
  templateUrl: './home-players-table-sidebar.component.html',
  styleUrls: ['./home-players-table-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePlayersTableSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
