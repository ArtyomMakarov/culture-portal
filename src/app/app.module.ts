import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { CultureHomeModule } from "./culture-home/culture-home.module";
import { AboutAuthorsModule } from "./about-authors/about-authors.module";
import { PoetsListModule } from "./poets-list/poets-list.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CultureHomeModule,
    AboutAuthorsModule,
    PoetsListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
