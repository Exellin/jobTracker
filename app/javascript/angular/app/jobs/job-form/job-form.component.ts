import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import templateString from './job-form.component.html';

@Component({
  selector: 'job-form',
  template: templateString
})

export class JobFormComponent implements OnInit {
  @Input() private jobForm: FormControl;

  private statuses: Array<{value: string, viewValue: string}> = [
    {value: 'discovered', viewValue: 'discovered'},
    {value: 'applied', viewValue: 'applied'},
    {value: 'followed_up', viewValue: 'followed up'},
    {value: 'no_interview', viewValue: 'no interview'},
    {value: 'interviewing', viewValue: 'interviewing'},
    {value: 'no_offer_received', viewValue: 'no offer received'},
    {value: 'offer_recieved', viewValue: 'offer recieved'}
  ];

  constructor() {}

  public ngOnInit(): void {}
}
