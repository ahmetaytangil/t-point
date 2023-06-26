import { Component } from '@angular/core';

@Component({
  selector: 'page-phone-number',
  template: `
    <temp-banner></temp-banner>
    <div class="container py-50px">
      <div class="pb-100px">
        <h2 class="phone-text-input">Telefon Numarası</h2>
        <div class="phone-number-shower">{{ phoneNumber | mask:'0 (000) 000 0000' }}</div>

        <atom-button variant="primary maxw-100 mb-4" text="Devam Et"></atom-button>
        <atom-numpad
            (onClickNumber)="addToPhoneNumber($event)"
            (onClickAllDelete)="deletePhoneNumber()"
            (onClickDelete)="deletePhoneLastNumber()"
        ></atom-numpad>
      </div>
    </div>
  `,
  styleUrls: ['./page-phone-number.component.scss']
})
export class PagePhoneNumberComponent {
  public phoneNumber: string = ''

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
