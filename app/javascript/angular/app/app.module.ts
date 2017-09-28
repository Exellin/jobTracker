import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MdNativeDateModule } from '@angular/material/core';
import { Angular2TokenService } from 'angular2-token';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { JobsModule } from './jobs/jobs.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MdNativeDateModule,
    RoutingModule,
    AuthenticationModule,
    JobsModule
  ],
  providers: [
    Angular2TokenService
  ]
})

export class AppModule {}
