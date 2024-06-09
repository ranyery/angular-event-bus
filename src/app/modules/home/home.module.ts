import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DisplayCounterModule } from 'src/app/shared/components/display-counter/display-counter.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './page/home.page';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule, DisplayCounterModule],
})
export class HomeModule {}
