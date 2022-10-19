import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'src/app/shared/shared.module';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [LoginRoutingModule, SharedModule],
})
export class LoginModule {}
