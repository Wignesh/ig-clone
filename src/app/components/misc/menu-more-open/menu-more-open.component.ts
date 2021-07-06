import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-more-open',
  templateUrl: './menu-more-open.component.html',
  styleUrls: ['./menu-more-open.component.scss'],
})
export class MenuMoreOpenComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  showMenu() {
    this.authService.showMenu();
  }
  showMoreMenu() {
    this.authService.showMoreMenu();
  }
}
