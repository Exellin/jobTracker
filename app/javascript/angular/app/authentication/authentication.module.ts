import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular2TokenService } from 'angular2-token';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { LoggedInGuard } from './logged-in.guard'
import { LoggedOutGuard } from './logged-out.guard'
import { InputFieldComponent } from '../shared/input-field/input-field.component'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    InputFieldComponent
  ],
  providers: [
    Angular2TokenService,
    AuthenticationService,
    LoggedInGuard,
    LoggedOutGuard
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})

export class AuthenticationModule {}
