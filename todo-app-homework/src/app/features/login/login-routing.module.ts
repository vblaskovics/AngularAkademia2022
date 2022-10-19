import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlreadyInGuard } from 'src/app/utils/guards/already-in.guard';
import { AuthGuard } from 'src/app/utils/guards/auth.guard';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [AlreadyInGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [AlreadyInGuard],
  },
  {
    path: '**',
    redirectTo: 'todo',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
