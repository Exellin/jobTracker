import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import templateString from './input-field.component.html';

@Component({
  inputs: ['type', 'placeholder', 'control', 'format'],
  selector: 'input-field',
  template: templateString
})

export class InputFieldComponent {}
