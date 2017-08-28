import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class JobsService {
  constructor(private http: Http) {}

  public createJob(job: any): Observable<void> {
    return this.http.post('api/jobs', job).map((res: any) => {});
  }

  public indexJobs(userId: number): Observable<void> {
    const searchParams: URLSearchParams = new URLSearchParams();
    searchParams.append('user_id', userId.toString());
    return this.http.get('api/jobs', { search: searchParams }).map((res: any) => res.json());
  }
}
