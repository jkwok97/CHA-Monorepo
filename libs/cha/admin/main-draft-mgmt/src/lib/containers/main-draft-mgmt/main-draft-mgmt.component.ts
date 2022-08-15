import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cha-admin-main-draft-mgmt',
  templateUrl: './main-draft-mgmt.component.html',
  styleUrls: ['./main-draft-mgmt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainDraftMgmtComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
