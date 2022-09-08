import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerBoxComponent } from './components/timer-box/timer-box.component';
import { WordBoxComponent } from './components/word-box/word-box.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { ScoreBoxComponent } from './components/score-box/score-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerBoxComponent,
    WordBoxComponent,
    InputBoxComponent,
    ScoreBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
