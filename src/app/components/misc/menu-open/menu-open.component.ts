import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-open',
  templateUrl: './menu-open.component.html',
  styleUrls: ['./menu-open.component.scss'],
})
export class MenuOpenComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  showMenu() {
    this.authService.showMenu();
  }
  showMoreMenu() {
    this.authService.showMoreMenu();
  }
}
