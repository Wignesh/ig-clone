import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavAuthComponent } from './components/accounts/shared/nav-auth/nav-auth.component';
import { FooterAuthComponent } from './components/accounts/shared/footer-auth/footer-auth.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { ForgotPasswordComponent } from './components/accounts/password/forgot-password/forgot-password.component';
import { MenuOpenComponent } from './components/misc/menu-open/menu-open.component';
import { MenuMoreOpenComponent } from './components/misc/menu-more-open/menu-more-open.component';
import { NavSignupComponent } from './components/accounts/shared/nav-signup/nav-signup.component';
import { IgHomeComponent } from './components/app/ig-home/ig-home.component';
import { SignupComponent } from './components/accounts/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupVerifyComponent } from './components/accounts/signup/signup-verify/signup-verify.component';
import { NewComponent } from './components/app/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavAuthComponent,
    FooterAuthComponent,
    HomeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    MenuOpenComponent,
    MenuMoreOpenComponent,
    NavSignupComponent,
    IgHomeComponent,
    SignupComponent,
    SignupVerifyComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
