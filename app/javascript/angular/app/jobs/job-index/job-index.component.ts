import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { MdSnackBar } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/observable/of';

import { JobsService } from '../jobs.service';
import templateString from './job-index.component.html';
import './job-index.component.scss';

@Component({
  template: templateString
})

export class JobIndexComponent implements OnInit {
  public dataSource: BindDataTableSource | null;
  public jobs: any[];
  private displayedColumns: string[] = ['title', 'company', 'status', 'actions'];
  private job: any;
  private isEditing: boolean = false;
  private editJobForm: FormGroup;
  private createJobForm: FormGroup;

  constructor(
    private jobsService: JobsService,
    private tokenService: Angular2TokenService,
    private snackBar: MdSnackBar,
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.tokenService.validateToken().subscribe(
      (res: any) => {
        const userId: number = JSON.parse(res._body).data.id;
        this.getJobs(userId);
      },
      (err: any) => {
        this.snackBar.open('Unable to validate user token', 'Close', {
          duration: 5000
        });
      }
    );
  }

  private getJobs(userId: number): void {
    this.jobsService.indexJobs(userId).subscribe(
      (res: any) => {
        this.jobs = res.data;
        this.dataSource = new BindDataTableSource(this);
      },
      (err: any) => {
        this.snackBar.open('Unable to retrieve jobs', 'Close', {
          duration: 5000
        });
      }
    );
  }

  private deleteJob(job: any): void {
    if (confirm(`Are you sure you want to delete ${job.title} from ${job.company}`)) {
      this.jobsService.deleteJob(job.id).subscribe(
        (res: any) => {
          this.snackBar.open('Job successfully deleted', 'Close', {
            duration: 5000
          });
          const index: number = this.jobs.findIndex((foundJob: any) => {
            return foundJob.id === job.id;
          });
          this.jobs.splice(index, 1);
          this.dataSource = new BindDataTableSource(this);
        },
        (err: any) => {
          this.snackBar.open('Unable to delete job', 'Close', {
            duration: 5000
          });
        }
      );
    }
  }

  private showJob(job: any): void {
    this.job = job;

    this.editJobForm = this.formBuilder.group({
      application_url: this.formBuilder.control(this.job.application_url),
      company: this.formBuilder.control(this.job.company),
      company_url: this.formBuilder.control(this.job.company_url),
      cover_letter: this.formBuilder.control(this.job.cover_letter),
      date_applied: this.formBuilder.control(this.job.date_applied),
      date_posted: this.formBuilder.control(this.job.date_posted),
      description: this.formBuilder.control(this.job.description),
      feedback: this.formBuilder.control(this.job.feedback),
      point_of_contact: this.formBuilder.control(this.job.point_of_contact),
      status: this.formBuilder.control(this.job.status),
      title: this.formBuilder.control(this.job.title)
    });
  }

  private showTable(): void {
    this.job = null;
    this.isEditing = false;
    this.editJobForm = null;
    this.createJobForm = null;
  }

  private showEditForm(): void {
    this.isEditing = true;
  }

  private submitEditForm(job: any): void {
    job.user_id = this.job.user_id;
    job.id = this.job.id;

    this.jobsService.updateJob(job).subscribe (
      (res: any) => {
        this.snackBar.open('You have edited this job', 'Close', {
          duration: 5000
        });
        const index: number = this.jobs.findIndex((foundJob: any) => {
          return foundJob.id === job.id;
        });
        this.jobs[index] = job;
        this.dataSource = new BindDataTableSource(this);
      },
      (err: any) => {
        const parsedErrors: string[] = JSON.parse(err._body).errors;
        for (const attribute in this.editJobForm.controls) {
          if (parsedErrors[attribute]) {
            this.editJobForm.controls[attribute].setErrors(parsedErrors[attribute]);
          }
        }
        this.editJobForm.setErrors(parsedErrors);
      }
    );
  }

  private showCreateForm(): void {
    this.createJobForm = this.formBuilder.group({
      application_url: this.formBuilder.control(''),
      company: this.formBuilder.control(''),
      company_url: this.formBuilder.control(''),
      cover_letter: this.formBuilder.control(''),
      date_applied: this.formBuilder.control(''),
      date_posted: this.formBuilder.control(''),
      description: this.formBuilder.control(''),
      feedback: this.formBuilder.control(''),
      point_of_contact: this.formBuilder.control(''),
      status: this.formBuilder.control('discovered'),
      title: this.formBuilder.control('')
    });
  }

  private submitCreateForm(job: any): void {
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
        this.jobs.push(res.data);
        this.dataSource = new BindDataTableSource(this);
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

/* tslint:disable max-classes-per-file */
export class BindDataTableSource extends DataSource<any> {
  constructor(private jobIndex: JobIndexComponent) {
    super();
  }

  public connect(): Observable<any> {
    return Observable.of(this.jobIndex.jobs);
  }

  public disconnect(): void {}
}
