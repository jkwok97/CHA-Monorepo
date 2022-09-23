import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-depth-chart-item-sidebar',
  templateUrl: './depth-chart-item-sidebar.component.html',
  styleUrls: ['./depth-chart-item-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartItemSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
