import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-home-franchise-table',
  templateUrl: './home-franchise-table.component.html',
  styleUrls: ['./home-franchise-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFranchiseTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
