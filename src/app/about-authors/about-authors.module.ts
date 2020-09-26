import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from "../shared/shared.module";

import { AboutAuthorsComponent } from './page/about-authors.component';
import { TeammateCardComponent } from './components/teammate-card/teammate-card.component';
import { TeammateWorklogComponent } from './components/teammate-worklog/teammate-worklog.component';
import { AboutAuthorsService } from "./services/about_authors.service";

@NgModule({
  declarations: [
    AboutAuthorsComponent,
    TeammateCardComponent,
    TeammateWorklogComponent,
  ],
  imports: [CommonModule, MatTableModule, SharedModule],
  providers: [AboutAuthorsService]
})
export class AboutAuthorsModule {}
