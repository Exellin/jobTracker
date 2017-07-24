import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import templateString from './login.component.html';
import { AuthenticationService } from '../authentication.service'

@Component({
  template: templateString
})

export class LoginComponent implements OnInit {
  logInForm;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MdSnackBar
  ) {}

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      email: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    });
  }

  submit(value: any) {
    this.authService.logIn(value.email, value.password).subscribe(
      res => {
        this.snackBar.open('You have successfully logged in', 'Close', {
          duration: 2000
        });
        this.router.navigate(['/']);
      },
      err => {
        this.snackBar.open('Invalid login credentials. Please try again', 'Close', {
          duration: 2000
        });
      }
    )
  }
}
