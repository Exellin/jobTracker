import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

import templateString from './app.component.html';
import './app.component.scss';

@Component({
  selector: 'angular',
  template: templateString
})

export class AppComponent {
  constructor(private tokenService: Angular2TokenService) {
    this.tokenService.init();
  }
}
