import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ROUTE_PATHS } from "../../core/constants";

@Component({
  selector: 'page-splash',
  templateUrl: './page-splash.component.html',
  styleUrls: ['./page-splash.component.scss']
})
export class PageSplashComponent {
  ROUTE_PATHS = ROUTE_PATHS
  constructor(public router: Router) {}
}
