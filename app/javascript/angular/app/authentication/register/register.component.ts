import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { AuthenticationService } from '../authentication.service';
import templateString from './register.component.html';

@Component({
  template: templateString
})

export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MdSnackBar
  ) {}

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      password_confirmation: this.formBuilder.control('')
    });
  }

  public submit(value: any): void {
    this.authService.register(value.email, value.password, value.password_confirmation).subscribe(
      (res: any) => {
        this.snackBar.open(`You have successfully registered`, 'Close', {
          duration: 2000
        });
        this.router.navigate(['/']);
      },
      (err: any) => {
        const parsedErrors: string[] = JSON.parse(err._body).errors;
        for (const attribute in this.registerForm.controls) {
          if (parsedErrors[attribute]) {
            this.registerForm.controls[attribute].setErrors(parsedErrors[attribute]);
          }
        }
        this.registerForm.setErrors(parsedErrors);
      }
    );
  }
}
