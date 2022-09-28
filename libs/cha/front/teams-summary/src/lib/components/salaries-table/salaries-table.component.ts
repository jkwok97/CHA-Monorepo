import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-salaries-table',
  templateUrl: './salaries-table.component.html',
  styleUrls: ['./salaries-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalariesTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
