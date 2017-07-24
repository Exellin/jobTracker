import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular2TokenService } from 'angular2-token';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    Angular2TokenService,
    AuthenticationService
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})

export class AuthenticationModule {}
