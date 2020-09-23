import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PoetsListComponent } from '../poets-list/poets-list.component';
import { AuthorDetailComponent } from '../poets-list/components/author-detail/author-detail.component';

const routes: Routes = [
  { path: '', component: PoetsListComponent },
  { path: ':id', component: AuthorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoetsListRoutingModule {}
