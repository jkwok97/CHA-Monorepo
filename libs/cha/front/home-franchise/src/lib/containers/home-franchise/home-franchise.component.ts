import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-front-home-franchise',
  templateUrl: './home-franchise.component.html',
  styleUrls: ['./home-franchise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFranchiseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
