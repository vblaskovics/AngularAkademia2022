import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextDisplayComponent } from './components/text-display/text-display.component';
import { CharacterSelectorContainerComponent } from './components/character-selector-container/character-selector-container.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { ArenaComponent } from './components/arena/arena.component';

@NgModule({
  declarations: [
    AppComponent,
    TextDisplayComponent,
    CharacterSelectorContainerComponent,
    CharactersComponent,
    ArenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
