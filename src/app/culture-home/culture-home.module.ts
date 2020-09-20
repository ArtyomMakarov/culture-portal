import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CulturePageComponent } from './page/culture-page.component';
import { AuthorOfDayComponent } from './components/author-of-day/author-of-day.component';
import { GreetingComponent } from './components/greeting/greeting.component';



@NgModule({
  declarations: [
    CulturePageComponent,
    AuthorOfDayComponent,
    GreetingComponent],
  imports: [
    CommonModule
  ]
})
export class CultureHomeModule { }
