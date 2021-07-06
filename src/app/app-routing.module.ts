import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { ForgotPasswordComponent } from './components/accounts/password/forgot-password/forgot-password.component';
import { IgHomeComponent } from './components/app/ig-home/ig-home.component';
import { SignupComponent } from './components/accounts/signup/signup.component';
import { SignupVerifyComponent } from './components/accounts/signup/signup-verify/signup-verify.component';
import { AuthGuard } from './guards/auth.guard';
import { AccessGuard } from './guards/access.guard';
import { NewComponent } from './components/app/new/new.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: IgHomeComponent,
    canActivate: [AccessGuard],
  },
  {
    path: 'new',
    component: NewComponent,
    canActivate: [AccessGuard],
  },
  {
    path: 'accounts',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'password',
        children: [
          {
            path: 'reset',
            component: ForgotPasswordComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
      {
        path: 'signup',
        children: [
          {
            path: '',
            component: SignupComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'verify',
            component: SignupVerifyComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
