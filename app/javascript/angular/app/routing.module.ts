import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoggedInGuard } from './authentication/logged-in.guard';
import { LoggedOutGuard } from './authentication/logged-out.guard';

const routes: Routes = [
 { path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard] },
 { path: 'register', component: RegisterComponent, canActivate: [LoggedOutGuard] }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
