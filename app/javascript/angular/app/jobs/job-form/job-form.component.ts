import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

import { JobsService } from '../jobs.service';
import templateString from './job-form.component.html';
import './job-form.component.scss';

@Component({
  selector: 'job-form',
  template: templateString
})

export class JobFormComponent implements OnInit {
  private resumes: any;
  private progressValue: number = 0;
  private selectedResumeId: number;
  private uploading: boolean = false;
  private mode: string = 'determinate';
  @Input() private jobForm: FormGroup;
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

  public ngOnInit(): void {
    this.getResumes(this.currentUserId);
  }

  private getResumes(userId: number): void {
    this.jobsService.indexResumes(userId).subscribe(
      (res: any) => {
        this.resumes = res.data;
      },
      (err: any) => {
        this.snackBar.open('Unable to retrieve resumes', 'Close', {
          duration: 5000
        });
      }
    );
  }

  private uploadResume(): void {
    this.uploading = true;
    this.mode = 'indeterminate';
    const fileBrowser: any = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData: FormData = new FormData();
      formData.append('resume[file]', fileBrowser.files[0]);
      formData.append('resume[user_id]', this.currentUserId.toString());

      this.jobsService.uploadResume(formData).subscribe(
        (res: any) => {
          this.progressValue = 100;
          this.resumes.push(res.data);
          this.selectedResumeId = res.data.id;
          this.uploading = false;
          this.mode = 'determinate';
        },
        (err: any) => {
          this.snackBar.open('Unable to upload resume', 'Close', {
            duration: 5000
          });
          this.uploading = false;
          this.mode = 'determinate';
        }
      );
    }
  }
}
