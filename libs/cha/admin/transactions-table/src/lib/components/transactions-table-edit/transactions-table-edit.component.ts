import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { GetTradeDto } from '@cha/shared/entities';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { TransactionsTableFacade } from '../../+state/transactions-table.facade';
import { TransactionsTableEditFormComponent } from '../transactions-table-edit-form';

@UntilDestroy()
@Component({
  selector: 'cha-admin-transactions-table-edit',
  templateUrl: './transactions-table-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableEditComponent {
  @Input() trade!: GetTradeDto | null;

  @Output() closeSidebar = new EventEmitter<boolean>();

  @ViewChild(TransactionsTableEditFormComponent, { static: false })
  ratingFormRef?: TransactionsTableEditFormComponent;

  constructor(private transactionsTableFacade: TransactionsTableFacade) {}

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    // const trade = {
    //   id: this.trade?.id,
    //   ...this.ratingFormRef?.form.value,
    // };
    // this.transactionsTableFacade.editTrade(trade);
    // this.transactionsTableFacade.isSaving$
    //   .pipe(
    //     untilDestroyed(this),
    //     filter((isSaving: boolean) => !isSaving)
    //   )
    //   .subscribe(() => this.closeSidebar.emit(true));
  }
}
