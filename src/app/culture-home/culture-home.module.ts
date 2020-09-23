import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthorOfDayComponent } from './components/author-of-day/author-of-day.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { CulturePageComponent } from './page/culture-page.component';

@NgModule({
  declarations: [CulturePageComponent, AuthorOfDayComponent, GreetingComponent],
  imports: [
    SharedModule,
    CommonModule,
  ],
  exports: [CulturePageComponent],
})
export class CultureHomeModule {}
