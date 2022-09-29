import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'blade-radio-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  templateUrl: './radio-type.component.html',
  styleUrls: ['./radio-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioTypeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
