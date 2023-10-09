import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ROUTE_PATHS } from '../../../core/constants';
import { LoginService } from '../../../features/page-login/page-login.service';

@Component({
  selector: 'app-atom-layout',
  templateUrl: './atom-layout.component.html',
  styleUrls: ['./atom-layout.component.scss'],
})
export class AtomLayoutComponent {
  @Output() onClickPrev = new EventEmitter();
  @Input() enableRoutePrev: boolean = false;
  @Input() variant: string = '';
  @Input() disableAlign: boolean = false;
  @Input() bgVector: string = '';
  @Input() notFend: boolean = false;
  clickCount = 0;

  constructor(private loginService: LoginService) {}

  onDoubleClick() {
    this.clickCount++;

    if (this.clickCount === 5) {
      this.clickCount = 0;
      this.loginService.logOut();
    }
  }

  protected readonly ROUTE_PATHS = ROUTE_PATHS;
}
