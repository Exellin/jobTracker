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

  public statuses: Array<{value: string, viewValue: string}> = [
    {value: 'discovered', viewValue: 'discovered'},
    {value: 'applied', viewValue: 'applied'},
    {value: 'followed_up', viewValue: 'followed up'},
    {value: 'no_interview', viewValue: 'no interview'},
    {value: 'interviewing', viewValue: 'interviewing'},
    {value: 'no_offer_received', viewValue: 'no offer received'},
    {value: 'offer_recieved', viewValue: 'offer recieved'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private jobsService: JobsService,
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
      status: this.formBuilder.control('discovered'),
      title: this.formBuilder.control('')
    });
  }

  public submit(job: any): void {
    this.tokenService.validateToken().subscribe(
      (res: any) => {
        job.user_id = JSON.parse(res._body).data.id;
        this.submitJob(job);
      },
      (err: any) => {
        this.snackBar.open('Unable to validate user token', 'Close', {
          duration: 5000
        });
      }
    );
  }

  private submitJob(job: any): void {
    this.jobsService.createJob(job).subscribe (
      (res: any) => {
        this.snackBar.open('You have successfully created a job', 'Close', {
          duration: 5000
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
