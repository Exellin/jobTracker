import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { MdSnackBar } from '@angular/material';

@Injectable()

export class LoggedInGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
              private router: Router,
              private snackBar: MdSnackBar
  ) {}

  public canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.snackBar.open('You need to log in to visit this page', 'Close', {
        duration: 2000
      });
      this.router.navigate(['/login']);
      return false;
    }
  }
}
