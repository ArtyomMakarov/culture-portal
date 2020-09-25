import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutAuthorsComponent } from './about-authors/page/about-authors.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CulturePageComponent } from './culture-home/page/culture-page.component';
import { AuthorDetailComponent } from './poets-list/components/author-detail/author-detail.component';
import { PoetsListComponent } from './poets-list/components/poets-list/poets-list.component';
import { PoetsPageComponent } from './poets-list/page/poets-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: CulturePageComponent,
    data: { animation: 'left' },
  },
  {
    path: 'poets',
    component: PoetsPageComponent,
    data: { animation: 'center' },
    children: [
      {
        path: '',
        component: PoetsListComponent,
      },
      {
        path: ':id',
        component: AuthorDetailComponent,
        data: { animation: 'fade' },
      }
    ]
  },
  {
    path: 'about-team',
    component: AboutAuthorsComponent,
    data: { animation: 'right' },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { animation: 'fade' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
