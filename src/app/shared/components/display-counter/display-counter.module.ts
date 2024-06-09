import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DisplayCounterComponent } from './display-counter.component';

@NgModule({
  declarations: [DisplayCounterComponent],
  imports: [CommonModule],
  exports: [DisplayCounterComponent],
})
export class DisplayCounterModule {}
