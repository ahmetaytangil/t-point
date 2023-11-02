import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../core/constants';
import { LoginService } from '../page-login/page-login.service';

@Component({
  selector: 'page-splash',
  templateUrl: './page-splash.component.html',
  styleUrls: ['./page-splash.component.scss'],
})
export class PageSplashComponent {
  ROUTE_PATHS = ROUTE_PATHS;
  clickCount = 0;
  constructor(
    public router: Router,
    public loginService: LoginService,
  ) {}

  onDoubleClick() {
    console.log('A');
    this.clickCount++;

    if (this.clickCount === 5) {
      this.clickCount = 0;
      this.loginService.logOut();
    }
  }
}
