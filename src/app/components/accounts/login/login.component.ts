import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  isError: boolean = false;
  errorMsg: string = '';

  loginFormGrp: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginFormGrp = this.createLoginForm();
  }

  ngOnInit(): void {}

  async login() {
    if (!this.isLoading) {
      this.isLoading = !this.isLoading;
      try {
        const user = await Auth.signIn(
          this.loginFormGrp.get('identity').value,
          this.loginFormGrp.get('password').value
        );
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/home');
      } catch (error) {
        console.error('Error signing in', error);
        this.isError = true;
        this.errorMsg = error?.message;
        if (error?.code == 'UsernameExistsException')
          this.errorMsg = 'Username already exists.';
        if (error?.code == 'UserNotConfirmedException') {
          this.authService.setVerificationUsername(
            this.loginFormGrp.get('identity').value
          );
          this.authService.resendConfirmationCode(
            this.loginFormGrp.get('identity').value
          );
          this.router.navigateByUrl('/accounts/signup/verify');
        }
      }
      this.isLoading = false;
    }
  }

  createLoginForm() {
    return this.formBuilder.group({
      identity: new FormControl('', [Validators.required]),
      password: new FormControl('', {
        validators: [Validators.required],
        asyncValidators: [],
      }),
    });
  }
}
