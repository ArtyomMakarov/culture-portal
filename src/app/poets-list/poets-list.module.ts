import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';

import { PoetsListRoutingModule } from './poets-list-routing.module';
import { PoetsListComponent } from './poets-list.component';
import { MapComponent } from './components/map/map.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { SearchAuthorPipe } from './pipes/search-author.pipe';
import { MatInputModule } from '@angular/material/input';
import { AuthorDetailComponent } from './components/author-detail/author-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PoetsListComponent, MapComponent, SearchAuthorPipe, AuthorDetailComponent],
  imports: [
    SharedModule,
    CommonModule,
    PoetsListRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoibmlrYmVsNzciLCJhIjoiY2szaW11bjdkMDk4aTNscWo2aWpza2l6bCJ9.Dl4UkQcw5vsk5krKbIZ2KQ'
    })
  ],
  exports: [PoetsListComponent],
})
export class PoetsListModule {}
