import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-home-franchise-table-sidebar',
  templateUrl: './home-franchise-table-sidebar.component.html',
  styleUrls: ['./home-franchise-table-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFranchiseTableSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
