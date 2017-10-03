import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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

  private validDate(dateString: string): Observable<any> {
    let result: boolean;
    const dateObject: Date = new Date(dateString);
    if (!isNaN(dateObject.getDate())) {
      result = true;
    } else {
      result = false;
    }
    return Observable.of(result);
  }
}
