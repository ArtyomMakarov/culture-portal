import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { SharedModule } from '../shared/shared.module';
import { AuthorDetailComponent } from './components/author-detail/author-detail.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MapComponent } from './components/map/map.component';
import { VideoComponent } from './components/video/video.component';
import { SearchAuthorPipe } from './pipes/search-author.pipe';
import { PoetsListComponent } from './components/poets-list/poets-list.component';
import { VideoIdPipe } from './pipes/id.pipe';
import { PoetsPageComponent } from './page/poets-page.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    PoetsListComponent,
    MapComponent,
    SearchAuthorPipe,
    AuthorDetailComponent,
    GalleryComponent,
    VideoComponent,
    VideoIdPipe,
    PoetsPageComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    MatCardModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoibmlrYmVsNzciLCJhIjoiY2szaW11bjdkMDk4aTNscWo2aWpza2l6bCJ9.Dl4UkQcw5vsk5krKbIZ2KQ',
    }),
    NgImageSliderModule,
    NgxYoutubePlayerModule,
    AppRoutingModule
  ],
  exports: [PoetsListComponent],
})
export class PoetsListModule {}
