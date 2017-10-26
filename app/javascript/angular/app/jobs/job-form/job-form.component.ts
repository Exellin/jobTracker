import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

import { JobsService } from '../jobs.service';
import templateString from './job-form.component.html';
import './job-form.component.scss';

@Component({
  selector: 'job-form',
  template: templateString
})

export class JobFormComponent implements OnInit {
  @Input() private jobForm: FormControl;
  @Input() private currentUserId: number;
  @ViewChild('fileInput') private fileInput: any;

  private statuses: Array<{value: string, viewValue: string}> = [
    {value: 'discovered', viewValue: 'discovered'},
    {value: 'applied', viewValue: 'applied'},
    {value: 'followed_up', viewValue: 'followed up'},
    {value: 'no_interview', viewValue: 'no interview'},
    {value: 'interviewing', viewValue: 'interviewing'},
    {value: 'no_offer_received', viewValue: 'no offer received'},
    {value: 'offer_recieved', viewValue: 'offer recieved'}
  ];

  constructor(
    private jobsService: JobsService,
    private snackBar: MdSnackBar
  ) {}

  public ngOnInit(): void {}

  private uploadResume(): void {
    const fileBrowser: any = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData: FormData = new FormData();
      formData.append('resume[file]', fileBrowser.files[0]);
      formData.append('resume[user_id]', this.currentUserId.toString());

      this.jobsService.uploadResume(formData).subscribe(
        (res: any) => {
          this.snackBar.open('Resume successfully uploaded', 'Close', {
            duration: 5000
          });
        },
        (err: any) => {
          this.snackBar.open('Unable to upload resume', 'Close', {
            duration: 5000
          });
        }
      );
    }
  }
}
