import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from "@angular/router";
import { ROUTE_PATHS } from "../../../core/constants";

@Component({
  selector: 'temp-header',
  template: `
    <div class="temp-header">
      <div class="container">
        <div class="flex-center-between">
          <div class="temp-header-route">
            <img
              class="route-back"
              (click)="onClickBack.emit()"
              [src]="'icon-left-chevron-colored.svg' | getSrc"
              alt=""
            >
            <div class="temp-header-breadcrumbs" *ngFor="let item of list">
              <span class="temp-header-breadcrumbs-text">
                {{ item }}
              </span>
              <img
                class="temp-header-breadcrumbs-icon"
                [src]="'icon-chevron-right-grey.svg' | getSrc"
                alt=""
              >
            </div>
          </div>

          <img
            class="temp-header-home-icon"
            [src]="'icon-home-colored.svg' | getSrc"
            alt=""
            (click)="router.navigate([ROUTE_PATHS.home])"
          >
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./temp-header.component.scss']
})
export class TempHeaderComponent {
  @Output() onClickBack = new EventEmitter()
  @Input() list: string[] = []

  constructor(public router: Router) {}


  protected readonly ROUTE_PATHS = ROUTE_PATHS;
}
