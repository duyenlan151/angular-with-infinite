import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ImageUrlPipe } from 'src/pipes/image-url.pipe';
import { InfiniteScrollDirective } from 'src/directives/infinite-scroll.directive';
import { ScrollNearEndDirective } from 'src/directives/scrolling-end.directive';
import { CommonModule } from '@angular/common';
import { RandomBgColorPipe } from 'src/pipes/random-bgColor.pipe';
import { BadgePokemonPipe } from 'src/pipes/badge-pokemon.pipe';
import { PokemonOldComponent } from './pokemon-old/pokemon-old.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ImageUrlPipe,
    RandomBgColorPipe,
    InfiniteScrollDirective,
    ScrollNearEndDirective,
    BadgePokemonPipe,
    PokemonOldComponent,
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
