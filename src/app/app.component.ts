import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PublicService } from './shared/logic/public.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="progress-bar" *ngIf="publicService.postLoading">
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    public publicService: PublicService,
  ) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      document.body.scrollTop = 0;
    });
  }
}
