import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { WordDisplayComponent } from './components/word-display/word-display.component';
import { WordInputComponent } from './components/word-input/word-input.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { GameComponent } from './pages/game/game.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    WordDisplayComponent,
    WordInputComponent,
    ScoreboardComponent,
    GameComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
