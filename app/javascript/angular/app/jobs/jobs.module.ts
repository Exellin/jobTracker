import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { JobsService } from './jobs.service';
import { CreateJobFormComponent } from './create-job-form/create-job-form.component';
import { JobIndexComponent } from './job-index/job-index.component';
import { JobViewComponent } from './job-view/job-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateJobFormComponent,
    JobIndexComponent,
    JobViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    SharedModule],
  providers: [
    JobsService
  ]
})

export class JobsModule {}
