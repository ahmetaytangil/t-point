import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'atom-numpad',
  template: `
    <div class="row">
      <div class="col-xs-4 mb-4" *ngFor="let number of numbers">
        <div class="numpad-item" (click)="onClickNumber.emit(number)">
          {{ number }}
        </div>
      </div>
      <div class="col-xs-4 mb-4">
        <div class="numpad-item" (click)="onClickAllDelete.emit()">
          SİL
        </div>
      </div>
      <div class="col-xs-4 mb-4">
        <div class="numpad-item" (click)="onClickNumber.emit(0)">
          0
        </div>
      </div>
      <div class="col-xs-4 mb-4">
        <div class="numpad-item" (click)="onClickDelete.emit()">
          <img class="delete-image" [src]="'icon-arrow-narrow-left.svg' | getSrc" alt="" width="140">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./atom-numpad.component.scss']
})
export class AtomNumpadComponent {
  @Output() onClickNumber = new EventEmitter<number>()
  @Output() onClickAllDelete = new EventEmitter()
  @Output() onClickDelete = new EventEmitter()

  public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

}
