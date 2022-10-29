import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { EditTradeDto, GetTradeDto } from '@cha/shared/entities';
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
  tradeFormRef?: TransactionsTableEditFormComponent;

  constructor(private transactionsTableFacade: TransactionsTableFacade) {}

  onCancel() {
    this.closeSidebar.emit(true);
  }

  onSave() {
    const trade: EditTradeDto = {
      id: this.trade?.id,
      team_one_picks: this.getNewArray(
        this.tradeFormRef?.form.value.team_one_picks
      ),
      team_two_picks: this.getNewArray(
        this.tradeFormRef?.form.value.team_two_picks
      ),
    };

    console.log(trade);

    this.transactionsTableFacade.editTrade(trade);
    this.transactionsTableFacade.isSaving$
      .pipe(
        untilDestroyed(this),
        filter((isSaving: boolean) => !isSaving)
      )
      .subscribe(() => this.closeSidebar.emit(true));
  }

  getNewArray(array: any[]) {
    const newArray: string[] = [];

    array.forEach((item) => {
      newArray.push(item.pick);
    });

    return newArray;
  }
}
