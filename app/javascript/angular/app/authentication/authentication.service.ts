import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

@Injectable()

export class AuthenticationService {
  constructor(
    private tokenService: Angular2TokenService,
    private snackBar: MdSnackBar
  ) {}

  logIn(email: string, password: string): Observable<Response> {
    return this.tokenService.signIn({ email: email,
                                      password: password });
  }

  register(email: string, password: string, password_confirmation: string): Observable<Response> {
    return this.tokenService.registerAccount({ email: email,
                                               password: password,
                                               passwordConfirmation: password_confirmation });
  }

  isLoggedIn(): boolean {
    return this.tokenService.userSignedIn();
  }

  isLoggedOut(): boolean {
    return !this.tokenService.userSignedIn();
  }

  logOut(): void {
    this.tokenService.signOut();
    this.snackBar.open('You have successfully signed out', 'Close', {
      duration: 2000
    });
  }
}
