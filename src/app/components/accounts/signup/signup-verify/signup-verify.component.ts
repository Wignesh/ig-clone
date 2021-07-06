import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-signup-verify',
  templateUrl: './signup-verify.component.html',
  styleUrls: ['./signup-verify.component.scss'],
})
export class SignupVerifyComponent implements OnInit {
  phone: string = '';
  username: string = '';
  isLoading: boolean = false;
  isError: boolean = false;
  errorMsg: string = '';
  code: string = '';
  isResend: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.getVerificationUsername() == '')
      this.router.navigateByUrl('/accounts/signup');
    else {
      this.phone = this.authService.getVerificationPhone();
      this.username = this.authService.getVerificationUsername();
    }
  }

  async confirmSignUp(username: string, code: string) {
    this.isLoading = true;
    try {
      const user = await Auth.confirmSignUp(username, code);
      console.log(user);
      this.router.navigateByUrl('/accounts/login');
    } catch (error) {
      console.log('error confirming sign up', error);
      this.isError = true;
      this.errorMsg = error?.message;
    }
    this.isLoading = false;
  }

  async next() {
    await this.confirmSignUp(this.username, this.code);
  }

  async resend() {
    this.isResend = false;
    await this.authService.resendConfirmationCode(this.username);
    this.isResend = true;
  }

  ngOnInit(): void {}
}
