import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class JobsService {
  constructor(private http: Http) {}

  public createJob(job: any): Observable<void> {
    return this.http.post('jobs', job).map((res: any) => {});
  }
}
