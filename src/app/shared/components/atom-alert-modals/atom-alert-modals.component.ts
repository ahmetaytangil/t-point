import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-atom-alert-modals',
  templateUrl: './atom-alert-modals.component.html',
  styleUrls: ['./atom-alert-modals.component.scss'],
})
export class AtomAlertModalsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      type: string;
      name: string;
      desc: string;
    },
  ) {}
}
