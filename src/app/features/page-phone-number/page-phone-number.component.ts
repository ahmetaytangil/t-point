import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ROUTE_PATHS } from "../../core/constants";

@Component({
  selector: 'page-phone-number',
  template: `
    <temp-banner></temp-banner>
    <div class="container py-50px">
      <div class="pb-100px phone-container">
        <div class="phone-col">
          <h2 class="phone-text-input">Telefon Numarası</h2>
          <div class="phone-number-shower">{{ phoneNumber | mask:'0 (000) 000 0000' }}</div>
          <atom-button
            variant="primary maxw-100 mb-4"
            text="Devam Et"
            (onClick)="router.navigate([ROUTE_PATHS.extra_packages, ROUTE_PATHS.buy])"
          ></atom-button>
        </div>
        <div class="phone-col">
          <atom-numpad
            (onClickNumber)="addToPhoneNumber($event)"
            (onClickAllDelete)="deletePhoneNumber()"
            (onClickDelete)="deletePhoneLastNumber()"
          ></atom-numpad>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./page-phone-number.component.scss']
})
export class PagePhoneNumberComponent {
  protected readonly ROUTE_PATHS = ROUTE_PATHS;
  public phoneNumber: string = ''

  constructor(public router: Router) {}

  addToPhoneNumber(val: any) {
    if (this.phoneNumber.length < 11) this.phoneNumber = this.phoneNumber + String(val)
  }

  deletePhoneNumber() {
    this.phoneNumber = ''
  }

  deletePhoneLastNumber() {
    this.phoneNumber = this.phoneNumber.slice(0, -1)
  }

}
