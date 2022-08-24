import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectButtonModule } from 'primeng/selectbutton';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UntypedFormControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'blade-button-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectButtonModule],
  templateUrl: './blade-button-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BladeButtonSelectComponent implements OnInit, AfterViewInit {
  @Input() options!: any[];

  @Output() optionChanged = new EventEmitter<string>();

  optionSelected = new UntypedFormControl();

  onOptionClick(option: any) {
    this.optionSelected.setValue(option.option.value);
  }

  ngOnInit(): void {
    this.optionSelected.valueChanges
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe((value: string) => {
        this.optionChanged.emit(value);
      });
  }

  ngAfterViewInit(): void {
    this.optionSelected.setValue(this.options[0].value);
  }
}
