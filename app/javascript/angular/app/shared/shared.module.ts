import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MdNativeDateModule } from '@angular/material';

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
    MaterialModule,
    MdNativeDateModule
  ]
})

export class SharedModule {}
