import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputFieldComponent } from './input-field/input-field.component';

@NgModule({
  declarations: [
    InputFieldComponent
  ],
  exports: [
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})

export class SharedModule {}
