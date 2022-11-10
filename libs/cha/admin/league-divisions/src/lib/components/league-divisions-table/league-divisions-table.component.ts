import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DivisionDto } from '@cha/shared/entities';

@Component({
  selector: 'cha-admin-league-divisions-table',
  templateUrl: './league-divisions-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDivisionsTableComponent implements OnInit {
  @Input() isMobile!: boolean;
  @Input() divisions!: DivisionDto[];

  constructor() {}

  ngOnInit(): void {}
}
