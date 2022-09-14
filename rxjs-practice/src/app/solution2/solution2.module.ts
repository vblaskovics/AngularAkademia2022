import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { DisplayComponent } from './components/display/display.component';
import { TypingFieldComponent } from './components/typing-field/typing-field.component';
import { SolutionComponent } from './solution.component';
import { ScoreComponent } from './components/score/score.component';
import { StateService } from './services/state.service';
import { FormsModule } from '@angular/forms';
import { TimeLoggerComponent } from './components/time-logger/time-logger.component';
import { TimeLogger2Component } from './components/time-logger2/time-logger2.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SolutionComponent
  ],
  declarations: [
    CounterComponent,
    DisplayComponent,
    TypingFieldComponent,
    ScoreComponent,
    SolutionComponent,
    TimeLoggerComponent,
    TimeLogger2Component,
  ],
  providers: [StateService],
})
export class Solution2Module { }
