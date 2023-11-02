import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PublicService } from './shared/logic/public.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="loading_general" *ngIf="publicService.generalLoading">
      <div>
        <img [src]="'logo-light.svg' | getSrc: 'logo'" alt="" class="mb-2" />
        <div class="flex-center-center">
          <mat-spinner></mat-spinner>
        </div>
      </div>
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
