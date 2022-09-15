import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { RandomWordComponent } from './random-word/random-word.component';
import { TypeInFormComponent } from './type-in-form/type-in-form.component';
import { ScoresComponent } from './scores/scores.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    RandomWordComponent,
    TypeInFormComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
