import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ROUTE_PATHS } from "../../core/constants";

@Component({
  selector: 'page-login-with-qr',
  template: `
    <temp-header
        [list]="['Ek Paketler', '3 GB İnternet Paketi', 'Satın Al', 'Paycell QR ile Öde']"
        (onClickBack)="router.navigate([ROUTE_PATHS.extra_packages, ROUTE_PATHS.buy])"
    ></temp-header>
    <div class="container general-main">
      <div class="container-in">
        <div class="container-cell">
          <div class="qr-code-container">
            <div class="qr-code-cell">
              <img class="qr-code-image" [src]="'qr-code.png' | getSrc:'common'" alt="">
            </div>
            <div class="qr-code-cell">
              <h2 class="qr-code-timer mb-4">00:{{ countdown }}</h2>
              <p class="qr-code-text">QR Kodu Paycell Cüzdan ile okutunuz.</p>
            </div>
          </div>
          <p class="text-m">Paycell Cüzdan QR menüsünde bulunan Quick kodu giriniz.</p>
          <div class="number-boxes-row">
            <div class="number-cell" *ngFor="let code of codeArray">
              <div class="number-box {{ code !== '#' ? 'active' : '' }}">
                {{ code !== '#' ? code : '' }}
              </div>
            </div>
          </div>
          <div class="button-side {{ !showBtn() ? 'disable-btn' : '' }}">
            <atom-button
              text="Devam Et"
              variant="primary w-100"
              (onClick)="router.navigate([ROUTE_PATHS.extra_packages, ROUTE_PATHS.after_payment])"
            ></atom-button>
          </div>
        </div>
        <div class="container-cell">
          <atom-numpad
            (onClickNumber)="setCodeToArray($event)"
            (onClickDelete)="deleteCode()"
            (onClickAllDelete)="deleteAllCode()"
          ></atom-numpad>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./page-login-with-qr.component.scss']
})
export class PageLoginWithQrComponent implements OnInit {
  protected readonly ROUTE_PATHS = ROUTE_PATHS;
  public countdown: number = 59;
  public codeArray: (number | string)[] = ['#', '#', '#', '#', '#', '#']
  constructor(public router: Router) {}

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    setInterval(() => {
      this.countdown -= 1;

      if (this.countdown === 0) {
        this.countdown = 59
      }
    }, 1000);
  }

  setCodeToArray(code: number) {
    const index = this.codeArray.findIndex(sym => sym === '#');
    if (index !== -1) {
      this.codeArray[index] = code;
    }
  }

  findIndexOfLastNumber(array: any[]): number {
    for (let i = array.length - 1; i >= 0; i--) {
      if (typeof array[i] === 'number') {
        return i;
      }
    }
    return -1; // Rakam bulunamazsa -1 döndürülür.
  }

  deleteCode() {
    const index = this.findIndexOfLastNumber(this.codeArray)
    if (index !== -1)  this.codeArray[index] = '#'
  }

  deleteAllCode() {
    this.codeArray = ['#', '#', '#', '#', '#', '#']
  }

  showBtn(): boolean {
    return !this.codeArray.some(s => s === '#')
  }

}
