import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayBoxComponent } from './components/display-box/display-box.component';
import { CharacterChooserComponent } from './components/character-chooser/character-chooser.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterSelectorComponent } from './components/character-selector/character-selector.component';
import { BattlefieldComponent } from './components/battlefield/battlefield.component';

@NgModule({
  declarations: [AppComponent, DisplayBoxComponent, CharacterChooserComponent, CharacterCardComponent, CharacterSelectorComponent, BattlefieldComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
