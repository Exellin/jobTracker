import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { MdSnackBar } from '@angular/material';

@Injectable()

export class LoggedOutGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
              private router: Router,
              private snackBar: MdSnackBar
  ) {}

  public canActivate(): boolean {
    if (this.authService.isLoggedOut()) {
      return true;
    } else {
      this.snackBar.open('You are already logged in', 'Close', {
        duration: 5000
      });
      this.router.navigate(['/']);
      return false;
    }
  }
}
