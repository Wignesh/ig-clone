import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ig-clone';
  _showMenu: boolean = false;
  _showMoreMenu: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.showMenuSource.subscribe((value) => {
      this._showMenu = value;
    });
    this.authService.showMoreMenuSource.subscribe((value) => {
      this._showMoreMenu = value;
    });
  }
}
