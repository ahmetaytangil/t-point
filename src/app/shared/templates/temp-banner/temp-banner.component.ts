import { Component } from '@angular/core';

@Component({
  selector: 'temp-banner',
  template: `
    <div class="temp-banner">
      <div class="temp-banner-image">
        <div class="overlay"></div>

        <picture id="responsive-picture">
          <source media="(orientation: landscape)" [srcset]="'turkcell-banner-landscape.jpg' | getSrc:'common'">
          <source media="(orientation: portrait)" [srcset]="'turkcell-banner.jpg' | getSrc:'common'">
          <img [src]="'turkcell-banner.jpg' | getSrc:'common'" alt="">
        </picture>
      </div>
      <div class="temp-content">
        <div class="container">
          <div class="flex-center">
            <img class="temp-content-logo" [src]="'logo-primary-small.png' | getSrc:'logo'" height="150" alt="">
            <div class="temp-content-inner">
              <h2 class="headline-3 mb-1">Turkcell İletişim Merkezi</h2>
              <div class="flex-center">
                <img class="house" [src]="'icon-house-green.svg' | getSrc" alt="">
                <p class="c-green headline-4 ms-10px">Açık</p>
                <img class="ms-4 me-1 eclipse" [src]="'icon-circle-dark.svg' | getSrc" width="20" height="20" alt="">
                <img class="ms-1 me-2 clock" [src]="'icon-clock-dark.svg' | getSrc" width="47" height="47" alt="">
                <p class="headline-4 mb-0">10:00AM - 10:00PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./temp-banner.component.scss']
})
export class TempBannerComponent {

}
