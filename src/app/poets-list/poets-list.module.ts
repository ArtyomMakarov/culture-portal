import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PoetsListRoutingModule } from './poets-list-routing.module';
import { PoetsListComponent } from './poets-list.component';

@NgModule({
  declarations: [PoetsListComponent],
  imports: [CommonModule, PoetsListRoutingModule],
  exports: [PoetsListComponent],
})
export class PoetsListModule {}
