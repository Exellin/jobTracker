import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { Angular2TokenService } from 'angular2-token';

import { JobsService } from '../jobs.service';
import templateString from './create-job-form.component.html';

@Component({
  template: templateString
})

export class CreateJobFormComponent implements OnInit {
  public createJobForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobsService,
    private router: Router,
    private snackBar: MdSnackBar,
    private tokenService: Angular2TokenService
  ) {}

  public ngOnInit(): void {
    this.createJobForm = this.formBuilder.group({
      application_url: this.formBuilder.control(''),
      company: this.formBuilder.control(''),
      company_url: this.formBuilder.control(''),
      cover_letter: this.formBuilder.control(''),
      date_applied: this.formBuilder.control(''),
      date_posted: this.formBuilder.control(''),
      description: this.formBuilder.control(''),
      point_of_contact: this.formBuilder.control(''),
      status: this.formBuilder.control(''),
      title: this.formBuilder.control('')
    });
  }

  public submit(job: any): void {
    job.user_id = this.tokenService.currentUserData.id;
    this.jobService.createJob(job).subscribe (
      (res: any) => {
        this.snackBar.open('You have successfully created a job', 'Close', {
          duration: 2000
        });
      },
      (err: any) => {
        const parsedErrors: string[] = JSON.parse(err._body).errors;
        for (const attribute in this.createJobForm.controls) {
          if (parsedErrors[attribute]) {
            this.createJobForm.controls[attribute].setErrors(parsedErrors[attribute]);
          }
        }
        this.createJobForm.setErrors(parsedErrors);
      }
    );
  }
}
