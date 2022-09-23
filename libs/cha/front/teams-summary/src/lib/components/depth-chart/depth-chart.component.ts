import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-depth-chart',
  templateUrl: './depth-chart.component.html',
  styleUrls: ['./depth-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepthChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
