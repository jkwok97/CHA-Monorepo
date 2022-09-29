import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'blade-text-input-type',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  templateUrl: './text-input-type.component.html',
  styleUrls: ['./text-input-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputTypeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
