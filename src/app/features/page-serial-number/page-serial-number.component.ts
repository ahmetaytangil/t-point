import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicService } from '../../shared/logic/public.service';

@Component({
  selector: 'app-page-serial-number',
  templateUrl: './page-serial-number.component.html',
  styleUrls: ['./page-serial-number.component.scss'],
})
export class PageSerialNumberComponent {
  form: FormGroup = this.fb.group({
    serial_number: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private publicService: PublicService,
  ) {}

  get serial_number() {
    return this.form.get('serial_number');
  }

  handleSave() {
    const serialNumber = this.serial_number?.value;

    if (serialNumber) {
      this.publicService.saveSerialNumberToLocalStorage(serialNumber);
    } else {
      this.form.markAllAsTouched();
    }
  }

  getValid() {
    return {
      'is-invalid':
        this.form.controls['serial_number'].invalid &&
        this.form.controls['serial_number'].touched,
      'is-valid':
        this.form.controls['serial_number'].valid &&
        this.form.controls['serial_number'].touched,
    };
  }

  /*addSerialNumber(val: number) {
    this.serial_number?.setValue(this.serial_number?.value + String(val))
  }

  deleteAll() {
    this.serial_number?.setValue(null)
  }

  deleteLastNumber() {
    this.serial_number?.setValue(String(this.serial_number?.value).slice(0, -1))
  }*/
}
