import { Component } from '@angular/core';

import { AuthenticationService } from '../authentication/authentication.service';
import templateString from './navbar.component.html';
import './navbar.component.scss';

@Component({
  selector: 'navbar',
  template: templateString
})

export class NavbarComponent {
  constructor(private authService: AuthenticationService) {}

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  public isLoggedOut(): boolean {
    return this.authService.isLoggedOut();
  }

  public logOut(): void {
    this.authService.logOut();
  }
}
