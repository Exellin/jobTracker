import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { Angular2TokenService } from 'angular2-token';

import { JobsService } from '../jobs.service';
import templateString from './create-job-form.component.html';

@Component({
  template: templateString
})

export class CreateJobFormComponent implements OnInit {
  createJobForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobsService,
    private router: Router,
    private snackBar: MdSnackBar,
    private tokenService: Angular2TokenService
  ) {}

  ngOnInit() {
    this.createJobForm = this.formBuilder.group({
      title: this.formBuilder.control(''),
      company: this.formBuilder.control(''),
      company_url: this.formBuilder.control(''),
      application_url: this.formBuilder.control(''),
      point_of_contact: this.formBuilder.control(''),
      date_posted: this.formBuilder.control(''),
      date_applied: this.formBuilder.control(''),
      status: this.formBuilder.control(''),
      cover_letter: this.formBuilder.control(''),
      description: this.formBuilder.control(''),
    })
  }

  submit(job: any) {
    job.user_id = this.tokenService.currentUserData.id
    this.jobService.createJob(job).subscribe (
      res => {
        this.snackBar.open('You have successfully created a job', 'Close', {
          duration: 2000
        });
      },
      err => {
        console.log(err)
        let parsed_errors = JSON.parse(err._body).errors;
        for (let attribute in this.createJobForm.controls) {
          if (parsed_errors[attribute]) {
            this.createJobForm.controls[attribute].setErrors(parsed_errors[attribute]);
          }
        }
        this.createJobForm.setErrors(parsed_errors);
      }
    )
  }
}
