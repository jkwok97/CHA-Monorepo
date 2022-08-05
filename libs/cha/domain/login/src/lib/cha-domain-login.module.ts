import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';

import { LoginComponent } from './containers';

import { LoginCardComponent, LoginFormComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    BladeAngularUiCardModule,
  ],
  declarations: [LoginComponent, LoginCardComponent, LoginFormComponent],
  exports: [LoginComponent],
})
export class ChaDomainLoginModule {}
