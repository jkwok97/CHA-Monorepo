import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { ButtonComponent } from '@blade/angular/ui/button';
import { EmailInputComponent } from '@blade/angular/formly/types/email-input';
import { DefaultFormFieldWrapperComponent } from '@blade/angular/formly/wrappers/default';

import { LoginComponent } from './containers';

import { LoginCardComponent, LoginFormComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    BladeAngularUiCardModule,
    ButtonComponent,

    FormlyModule.forRoot({
      wrappers: [
        {
          name: 'control-wrapper',
          component: DefaultFormFieldWrapperComponent,
        },
      ],
      types: [
        {
          name: 'email-input',
          component: EmailInputComponent,
          wrappers: ['control-wrapper'],
        },
      ],
    }),
  ],
  declarations: [LoginComponent, LoginCardComponent, LoginFormComponent],
  exports: [LoginComponent],
})
export class ChaDomainLoginModule {}
