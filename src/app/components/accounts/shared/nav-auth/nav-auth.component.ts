import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.scss'],
})
export class NavAuthComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  showMenu() {
    this.authService.showMenu();
  }
}
