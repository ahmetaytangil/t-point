import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'atom-button',
  template: `
    <button class="atom-button {{variant}} {{size}}" (click)="onClick.emit()">
      {{text}}
    </button>
  `,
  styleUrls: ['./atom-button.component.scss']
})
export class AtomButtonComponent {
  @Output() onClick = new EventEmitter()
  @Input() text!: string
  @Input() variant: string = 'secondary'
  @Input() size: string = 'initial'
}
