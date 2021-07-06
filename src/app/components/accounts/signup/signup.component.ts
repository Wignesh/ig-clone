import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isLoading: boolean = false;
  isError: boolean = false;
  errorMsg: string = '';

  signupFormGrp: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.signupFormGrp = this.createSignupForm();
  }

  async next() {
    if (this.signupFormGrp.get('identity').value.length == 10) {
      this.signupFormGrp.get('identity').value =
        '+91' + this.signupFormGrp.get('identity').value;
    } else {
      this.signupFormGrp.get('identity').value =
        '+' + this.signupFormGrp.get('identity').value;
    }
    await this.signUp(
      this.signupFormGrp.get('username').value,
      this.signupFormGrp.get('password').value,
      this.signupFormGrp.get('fullName').value,
      this.signupFormGrp.get('identity').value
    );
  }

  async signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  async signUp(
    username: string,
    password: string,
    name: string,
    phone: string
  ) {
    this.isLoading = true;
    try {
      const { user } = await Auth.signUp({
        username: username,
        password: password,
        attributes: {
          name: name,
          phone_number: phone,
        },
      });
      console.log(user);
      this.authService.setVerificationUsername(username);
      this.authService.setVerificationPhone(phone);
      this.router.navigateByUrl('/accounts/signup/verify');
    } catch (error) {
      console.error('Error signing up:', error);
      this.isError = true;
      this.errorMsg = error?.message;
    }
    this.isLoading = false;
  }

  createSignupForm() {
    return this.formBuilder.group({
      identity: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [Validators.required]),
      username: new FormControl('', {
        validators: [Validators.required],
        asyncValidators: [],
      }),
      password: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  ngOnInit(): void {}
}
