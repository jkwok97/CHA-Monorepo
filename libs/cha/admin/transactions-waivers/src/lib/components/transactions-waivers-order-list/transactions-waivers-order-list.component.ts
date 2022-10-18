import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { WaiversDto } from '@cha/shared/entities';
import { TransactionsWaiversFacade } from '../../+state/transactions-waivers.facade';

@Component({
  selector: 'cha-admin-transactions-waivers-order-list',
  templateUrl: './transactions-waivers-order-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsWaiversOrderListComponent implements OnInit {
  @Input() waivers!: WaiversDto[];
  @Input() isMobile!: boolean;

  waiverList!: WaiversDto[];

  constructor(private transactionsWaiversFacade: TransactionsWaiversFacade) {}

  ngOnInit(): void {
    this.waiverList = this.mapItems(this.waivers);
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  mapItems(waivers: WaiversDto[]) {
    return waivers.map((waiver: WaiversDto) => ({
      ...waiver,
    }));
  }

  onReorder(event: any) {
    this.waiverList.forEach((waiver, index) => {
      waiver.priority_number = index + 1;
    });

    setTimeout(() => {
      this.transactionsWaiversFacade.updateWaiverPriority(this.waiverList);
    }, 200);
  }
}
