import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutAuthorsComponent } from './about-authors/about-authors.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CulturePageComponent } from './culture-home/page/culture-page.component';
import { PoetsListComponent } from './poets-list/poets-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: CulturePageComponent,
    data: { animation: 'left' }
  },
  {
    path: 'poets',
    component: PoetsListComponent,
    data: { animation: 'center' }
  },
  {
    path: 'about-team',
    component: AboutAuthorsComponent,
    data: { animation: 'right' }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { animation: 'fade' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
