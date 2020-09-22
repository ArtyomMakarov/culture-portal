import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
