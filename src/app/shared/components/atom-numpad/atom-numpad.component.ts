import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'atom-numpad',
  template: `
    <div class="row justify-center w-100">
      <div class="col-xs-4 mb-3" *ngFor="let number of numbers">
        <div
          class="numpad-item {{ variant }}"
          (click)="onClickNumber.emit(number)"
        >
          {{ number }}
        </div>
      </div>
      <div class="col-xs-4 mb-3">
        <div
          class="numpad-item delete-all {{ variant }}"
          (click)="onClickAllDelete.emit()"
        >
          Sil
        </div>
      </div>
      <div class="col-xs-4 mb-3">
        <div class="numpad-item {{ variant }}" (click)="onClickNumber.emit(0)">
          0
        </div>
      </div>
      <div class="col-xs-4 mb-3">
        <div
          class="numpad-item delete {{ variant }}"
          (click)="onClickDelete.emit()"
        >
          <img
            class="delete-image"
            [src]="
              (variant === 'default'
                ? 'icon-arrow-narrow-left.svg'
                : 'icon-arrow-left.svg'
              ) | getSrc
            "
            alt=""
            width="140"
          />
        </div>
      </div>
      <div class="col-xs-5" *ngIf="variant === 'secondary' && !withFooter">
        <img
          class="w-100 d-block"
          [src]="'pluspay-text.svg' | getSrc: 'logo'"
          alt=""
          width="140"
        />
      </div>
      <div class="col-xs-6 mt-5" *ngIf="withFooter">
        <img
          [src]="'turkcell-footer.svg' | getSrc: 'common'"
          alt=""
          height="50"
        />
      </div>
      <div class="col-xs-6 mt-5 text-end" *ngIf="withFooter">
        <img [src]="'paycell.png' | getSrc: 'common'" alt="" height="50" />
      </div>
    </div>
  `,
  styleUrls: ['./atom-numpad.component.scss'],
})
export class AtomNumpadComponent {
  @Output() onClickNumber = new EventEmitter<number>();
  @Output() onClickAllDelete = new EventEmitter();
  @Output() onClickDelete = new EventEmitter();

  @Input() withFooter: boolean = false;
  @Input() variant: 'default' | 'secondary' = 'default';

  public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
