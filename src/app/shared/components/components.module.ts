import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../material/material.module';
import { SwiperModule } from 'swiper/angular';
import { AtomButtonComponent } from './atom-button/atom-button.component';
import { AtomLineCardComponent } from './atom-line-card/atom-line-card.component';
import { AtomNumpadComponent } from './atom-numpad/atom-numpad.component';
import { AtomCounterComponent } from './atom-counter/atom-counter.component';
import { AtomAlertModalsComponent } from './atom-alert-modals/atom-alert-modals.component';
import { AtomLayoutComponent } from './atom-layout/atom-layout.component';

@NgModule({
  declarations: [
    AtomButtonComponent,
    AtomLineCardComponent,
    AtomNumpadComponent,
    AtomCounterComponent,
    AtomAlertModalsComponent,
    AtomLayoutComponent,
  ],
  exports: [
    AtomButtonComponent,
    AtomLineCardComponent,
    AtomNumpadComponent,
    AtomCounterComponent,
    AtomLayoutComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    MaterialModule,
    SwiperModule,
    RouterLink,
  ],
})
export class ComponentsModule {}
