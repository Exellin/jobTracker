import { NgModule } from '@angular/core'

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})

export class AuthenticationModule {}
