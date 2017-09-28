import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
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
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    SharedModule],
  providers: [
    JobsService
  ]
})

export class JobsModule {}
