import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      document.body.scrollTop = 0;
    });
  }
}
