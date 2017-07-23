import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './routing.module';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RoutingModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
