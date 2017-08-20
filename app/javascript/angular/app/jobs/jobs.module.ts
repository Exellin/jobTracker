import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { JobsService } from './jobs.service';
import { CreateJobFormComponent } from './create-job-form/create-job-form.component';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    CreateJobFormComponent,
  ],
  providers: [
    JobsService
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule]
})

export class JobsModule {}
