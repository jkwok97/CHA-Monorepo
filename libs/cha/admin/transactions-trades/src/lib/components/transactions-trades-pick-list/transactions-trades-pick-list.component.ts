import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cha-admin-transactions-trades-pick-list',
  templateUrl: './transactions-trades-pick-list.component.html',
  styleUrls: ['./transactions-trades-pick-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTradesPickListComponent {
  @Input() isMobile!: boolean;
}
