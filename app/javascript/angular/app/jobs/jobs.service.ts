import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class JobsService {
  constructor(private http: Http) {}

  public createJob(job: any): Observable<void> {
    return this.http.post('api/jobs', job).map((res: any) => res.json());
  }

  public indexJobs(userId: number): Observable<void> {
    const searchParams: URLSearchParams = new URLSearchParams();
    searchParams.append('user_id', userId.toString());
    return this.http.get('api/jobs', { search: searchParams }).map((res: any) => res.json());
  }

  public deleteJob(jobId: number): Observable<void> {
    return this.http.delete(`api/jobs/${jobId}`).map((res: any) => {});
  }

  public updateJob(job: any): Observable<void> {
    return this.http.put(`api/jobs/${job.id}`, job).map((res: any) => {});
  }

  public uploadResume(resume: any): Observable<void> {
    return this.http.post('api/resumes', resume).map((res: any) => res.json());
  }

  public indexResumes(userId: number): Observable<void> {
    const searchParams: URLSearchParams = new URLSearchParams();
    searchParams.append('user_id', userId.toString());
    return this.http.get('api/resumes', { search: searchParams }).map((res: any) => res.json());
  }

  public getResumeDownloadUrl(resumeId: number): Observable<void> {
    return this.http.get(`/api/resumes/${resumeId}/download_url`).map((res: any) => res.json());
  }
}
