import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { MdSnackBar } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { JobsService } from '../jobs.service';
import templateString from './job-index.component.html';

@Component({
  template: templateString
})

export class JobIndexComponent implements OnInit {
  public dataSource: BindDataTableSource | null;
  public jobs: any[];
  private displayedColumns: string[] = ['title', 'company', 'status', 'actions'];

  constructor(
    private jobsService: JobsService,
    private tokenService: Angular2TokenService,
    private snackBar: MdSnackBar
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
