import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  showMenuSource = new BehaviorSubject<boolean>(false);
  showMoreMenuSource = new BehaviorSubject<boolean>(false);
  verificationUsernameSource = new BehaviorSubject<string>('');
  verificationPhoneSource = new BehaviorSubject<string>('');
  emailSource = new BehaviorSubject<string>('');

  _showMenu = this.showMenuSource.asObservable();
  _showMoreMenu = this.showMoreMenuSource.asObservable();
  _verificationUsername = this.verificationUsernameSource.asObservable();
  _verificationPhone = this.verificationPhoneSource.asObservable();
  _email = this.emailSource.asObservable();

  showMenu() {
    this.showMenuSource.next(!this.showMenuSource.value);
  }

  showMoreMenu() {
    this.showMoreMenuSource.next(!this.showMoreMenuSource.value);
  }

  setVerificationUsername(phone: string) {
    this.verificationUsernameSource.next(phone);
  }

  getVerificationUsername(): string {
    return this.verificationUsernameSource.value;
  }

  setVerificationPhone(phone: string) {
    this.verificationPhoneSource.next(phone);
  }

  getVerificationPhone(): string {
    return this.verificationPhoneSource.value;
  }

  setEmail(email: string) {
    this.emailSource.next(email);
  }

  getEmail(): string {
    return this.emailSource.value;
  }

  async resendConfirmationCode(username: string) {
    try {
      const data = await Auth.resendSignUp(username);
      console.log(data);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }

  constructor() {}
}
