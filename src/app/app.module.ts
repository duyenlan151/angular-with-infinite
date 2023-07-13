import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ImageUrlPipe } from 'src/pipes/image-url.pipe';
import { InfiniteScrollDirective } from 'src/directives/infinite-scroll.directive';
import { ScrollNearEndDirective } from 'src/directives/scrolling-end.directive';

@NgModule({
  declarations: [AppComponent, PokemonComponent, ImageUrlPipe, InfiniteScrollDirective, ScrollNearEndDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
