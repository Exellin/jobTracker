import { Component, OnInit } from '@angular/core';

import templateString from './job-view.component.html';

@Component({
  inputs: ['job'],
  selector: 'job-view',
  template: templateString
})

export class JobViewComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {
  }
}
