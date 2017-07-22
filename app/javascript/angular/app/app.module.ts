import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module'
import { NavbarComponent } from './navbar/navbar.component'
import { AuthenticationModule } from './authentication/authentication.module'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
