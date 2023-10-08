import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-atom-counter',
  templateUrl: './atom-counter.component.html',
  styleUrls: ['./atom-counter.component.scss'],
})
export class AtomCounterComponent implements OnInit {
  @Output() handleOnCountDownComplete = new EventEmitter();
  @Input() handleSetCountDown: number | undefined;
  @Input() color: string | undefined;
  countdown: number = 60; // Başlangıç sayısı (60 saniye)

  constructor() {}

  ngOnInit(): void {
    if (this.handleSetCountDown) this.countdown = this.handleSetCountDown;

    this.startCountdown();
  }

  startCountdown() {
    const interval = setInterval(() => {
      this.countdown--;

      if (this.countdown <= 0) {
        clearInterval(interval);
        this.onCountdownComplete();
      }
    }, 1000); // Her saniye güncelle
  }

  onCountdownComplete() {
    this.handleOnCountDownComplete.emit();
  }
}
