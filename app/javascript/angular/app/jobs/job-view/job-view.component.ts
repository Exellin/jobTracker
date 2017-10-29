import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

import { JobsService } from '../jobs.service';
import templateString from './job-view.component.html';

@Component({
  selector: 'job-view',
  template: templateString
})

export class JobViewComponent implements OnInit {
  @Input() private job: any;
  private resume: any;
  private resumeDownloadUrl: string;

  constructor(
    private jobsService: JobsService,
    private snackBar: MdSnackBar) {}

  public ngOnInit(): void {
    if (this.job.resume_id.value) {
      this.jobsService.getResumeDownloadUrl(this.job.resume_id.value).subscribe(
        (res: any) => {
          this.resume = res.data.resume;
          this.resumeDownloadUrl = res.data.download_url;
        },
        (err: any) => {
          this.snackBar.open('Unable to get resume link', 'Close', {
            duration: 5000
          });
        }
      );
    }
  }

  private validDate(dateString: string): Observable<any> {
    let result: boolean;
    const dateObject: Date = new Date(dateString);
    if (!isNaN(dateObject.getDate())) {
      result = true;
    } else {
      result = false;
    }
    return Observable.of(result);
  }
}
