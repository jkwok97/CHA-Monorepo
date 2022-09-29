import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'blade-checkbox-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxTypeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
