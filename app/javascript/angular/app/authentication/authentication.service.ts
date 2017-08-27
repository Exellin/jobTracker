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

  public logIn(email: string, password: string): Observable<Response> {
    return this.tokenService.signIn({ email, password });
  }

  public register(email: string, password: string, passwordConfirmation: string): Observable<Response> {
    return this.tokenService.registerAccount({ email, password, passwordConfirmation });
  }

  public isLoggedIn(): boolean {
    return this.tokenService.userSignedIn();
  }

  public isLoggedOut(): boolean {
    return !this.tokenService.userSignedIn();
  }

  public logOut(): void {
    this.tokenService.signOut();
    this.snackBar.open('You have successfully signed out', 'Close', {
      duration: 2000
    });
  }
}
