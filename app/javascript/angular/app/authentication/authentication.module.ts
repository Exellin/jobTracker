import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular2TokenService } from 'angular2-token';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { LoggedInGuard } from './logged-in.guard';
import { LoggedOutGuard } from './logged-out.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    Angular2TokenService,
    AuthenticationService,
    LoggedInGuard,
    LoggedOutGuard
  ]
})

export class AuthenticationModule {}
