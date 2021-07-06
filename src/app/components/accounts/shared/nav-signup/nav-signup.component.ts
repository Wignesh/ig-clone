import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-signup',
  templateUrl: './nav-signup.component.html',
  styleUrls: ['./nav-signup.component.scss'],
})
export class NavSignupComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  navBack() {
    this.location.back();
  }
}
