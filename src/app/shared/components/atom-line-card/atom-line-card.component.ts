import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'atom-line-card',
  template: `
    <div
      (click)="!disable ? onClick.emit() : undefined"
      class="atom-line-card {{ disable ? 'disabled' : '' }} {{ disable ? '' : 'cursor-pointer' }}"
    >
      <div class="atom-line-card-image-side {{ subItems ? 'resize-image-side' : '' }}">
        <img class="atom-line-card-image" [src]="image" *ngIf="image" alt="">

        <div class="flex-center-between w-100" *ngIf="subItems">
          <div class="flex">
            <h2 class="mb-0 atom-line-card-price">{{ subItems.price }}</h2>
            <h2 class="mb-0 atom-line-card-price-sub">
              <span>{{ subItems.currency }}</span>{{ subItems.price_sub }}
            </h2>
          </div>
          <div class="atom-line-card-sub-outer">
            <h2 class="mb-0 atom-line-card-sub-text">{{ subItems.sub_text }}</h2>
            <h2 class="mb-0 atom-line-card-sub-name">{{ subItems.sub_name }}</h2>
          </div>
        </div>

      </div>
      <div class="atom-line-card-content" *ngIf="head">
        <h2 class="headline-3">{{ head }}</h2>
      </div>
    </div>
  `,
  styleUrls: ['./atom-line-card.component.scss']
})
export class AtomLineCardComponent {
  @Output() onClick = new EventEmitter()
  @Input() disable: boolean = false
  @Input() image!: string
  @Input() head!: string
  @Input() subItems!: ILineCardSubItems
}

export interface ILineCardSubItems {
  price: string,
  price_sub: string,
  currency: string,
  sub_text: string,
  sub_name: string
}
