import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-home-goalies-table-sidebar',
  templateUrl: './home-goalies-table-sidebar.component.html',
  styleUrls: ['./home-goalies-table-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeGoaliesTableSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
