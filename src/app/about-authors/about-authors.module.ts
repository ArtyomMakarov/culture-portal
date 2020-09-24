import { PoetsListModule } from './../poets-list/poets-list.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { AboutAuthorsComponent } from './page/about-authors.component';
import { TeammateCardComponent } from './components/teammate-card/teammate-card.component';
import { TeammateWorklogComponent } from './components/teammate-worklog/teammate-worklog.component';

@NgModule({
  declarations: [
    AboutAuthorsComponent,
    TeammateCardComponent,
    TeammateWorklogComponent,
  ],
  imports: [CommonModule, MatTableModule],
})
export class AboutAuthorsModule {}
