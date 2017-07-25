import { Component } from '@angular/core'
import templateString from './navbar.component.html';
import './navbar.component.scss'

import { AuthenticationService } from '../authentication/authentication.service'

@Component({
  selector: 'navbar',
  template: templateString
})

export class NavbarComponent {
  constructor(private authService: AuthenticationService) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isLoggedOut(): boolean {
    return this.authService.isLoggedOut();
  }

  logOut(): void {
    this.authService.logOut();
  }
}
