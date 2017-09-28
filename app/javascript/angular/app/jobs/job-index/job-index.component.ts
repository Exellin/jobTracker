import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { MdSnackBar } from '@angular/material';

import { JobsService } from '../jobs.service';
import templateString from './job-index.component.html';

@Component({
  template: templateString
})

export class JobIndexComponent implements OnInit {
  private jobs: any[];

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
      },
      (err: any) => {
        this.snackBar.open('Unable to retrieve jobs', 'Close', {
          duration: 5000
        });
      }
    );
  }
}
