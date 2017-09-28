import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { AuthenticationService } from '../authentication.service';
import templateString from './login.component.html';

@Component({
  template: templateString
})

export class LoginComponent implements OnInit {
  public logInForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MdSnackBar
  ) {}

  public ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      email: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    });
  }

  public submit(value: any): void {
    this.authService.logIn(value.email, value.password).subscribe(
      (res: any) => {
        this.snackBar.open('You have successfully logged in', 'Close', {
          duration: 5000
        });
        this.router.navigate(['/']);
      },
      (err: any) => {
        this.snackBar.open('Invalid login credentials. Please try again', 'Close', {
          duration: 5000
        });
      }
    );
  }
}
