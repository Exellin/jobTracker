import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { InputFieldComponent } from './input-field/input-field.component';

@NgModule({
  declarations: [
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    InputFieldComponent
  ]
})

export class SharedModule {}
