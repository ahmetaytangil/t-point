import { Component } from '@angular/core';

@Component({
  selector: 'temp-footer',
  template: `
    <div class="temp-footer">
      <img [src]="'turkcell-light.png' | getSrc:'logo'" height="60" alt="">
      <img [src]="'paycell-light.svg' | getSrc:'logo'" height="60" alt="">
      <img [src]="'plus-pay.svg' | getSrc:'logo'" height="60" alt="">
    </div>
  `,
  styleUrls: ['./temp-footer.component.scss']
})
export class TempFooterComponent {

}
