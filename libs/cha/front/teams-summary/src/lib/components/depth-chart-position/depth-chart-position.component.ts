import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-depth-chart-position',
  templateUrl: './depth-chart-position.component.html',
  styleUrls: ['./depth-chart-position.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartPositionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
