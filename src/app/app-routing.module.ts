import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutAuthorsComponent } from './about-authors/about-authors.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CulturePageComponent } from './culture-home/page/culture-page.component';
import { PoetsListComponent } from './poets-list/poets-list.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { WorkLogComponent } from './work-log/work-log.component';

const routes: Routes = [
  {
    path: 'home',
    component: CulturePageComponent,
  },
  { path: 'poets', component: PoetsListComponent },
  {
    path: 'about-team',
    component: AboutAuthorsComponent,
  },
  { path: 'work-log', component: WorkLogComponent },
  { path: 'style-guide', component: StyleGuideComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
