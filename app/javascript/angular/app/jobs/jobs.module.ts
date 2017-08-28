import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { JobsService } from './jobs.service';
import { CreateJobFormComponent } from './create-job-form/create-job-form.component';
import { JobIndexComponent } from './job-index/job-index.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateJobFormComponent,
    JobIndexComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule],
  providers: [
    JobsService
  ]
})

export class JobsModule {}
