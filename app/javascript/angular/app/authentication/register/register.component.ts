import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { AuthenticationService } from '../authentication.service';
import templateString from './register.component.html';

@Component({
  template: templateString
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MdSnackBar
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      password_confirmation: this.formBuilder.control('')
    });
  }

  submit(value: any) {
    this.authService.register(value.email, value.password, value.password_confirmation).subscribe(
      res => {
        this.snackBar.open(`You have successfully registered`, 'Close', {
          duration: 2000
        });
        this.router.navigate(['/']);
      },
      err => {
        let parsed_errors = JSON.parse(err._body).errors;
        for (let attribute in this.registerForm.controls) {
          if (parsed_errors[attribute]) {
            this.registerForm.controls[attribute].setErrors(parsed_errors[attribute]);
          }
        }
        this.registerForm.setErrors(parsed_errors);
      }
    );
  }
}
