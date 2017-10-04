import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { JobIndexComponent } from './jobs/job-index/job-index.component';
import { LoggedInGuard } from './authentication/logged-in.guard';
import { LoggedOutGuard } from './authentication/logged-out.guard';

const routes: Routes = [
 { path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard] },
 { path: 'register', component: RegisterComponent, canActivate: [LoggedOutGuard] },
 { path: 'jobs', component: JobIndexComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class RoutingModule {}
