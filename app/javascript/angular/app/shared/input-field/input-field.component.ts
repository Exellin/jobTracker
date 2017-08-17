import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import templateString from './input-field.component.html';

@Component({
  selector: 'input-field',
  template: templateString,
  inputs: ['type', 'placeholder', 'control']
})

export class InputFieldComponent {}
