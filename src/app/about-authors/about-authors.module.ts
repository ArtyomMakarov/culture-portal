import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutAuthorsComponent } from './about-authors.component';
import { TeammateCardComponent } from './components/teammate-card/teammate-card.component';

@NgModule({
  declarations: [AboutAuthorsComponent, TeammateCardComponent],
  imports: [CommonModule],
})
export class AboutAuthorsModule {}
