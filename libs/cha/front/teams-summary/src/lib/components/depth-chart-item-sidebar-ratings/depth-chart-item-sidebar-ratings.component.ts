import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-depth-chart-item-sidebar-ratings',
  templateUrl: './depth-chart-item-sidebar-ratings.component.html',
  styleUrls: ['./depth-chart-item-sidebar-ratings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartItemSidebarRatingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
