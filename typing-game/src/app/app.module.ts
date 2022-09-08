import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RandomWordGeneratorComponent } from './components/random-word-generator/random-word-generator.component';
import { PlayerInputComponent } from './components/player-input/player-input.component';
import { OverallPlayerPointsComponent } from './components/overall-player-points/overall-player-points.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RandomWordGeneratorComponent,
    PlayerInputComponent,
    OverallPlayerPointsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
