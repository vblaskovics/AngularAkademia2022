import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { DisplayComponent } from './components/display/display.component';
import { TypingFieldComponent } from './components/typing-field/typing-field.component';
import { SolutionComponent } from './solution.component';
import { ScoreComponent } from './components/score/score.component';
import { StateService } from './services/state.service';
import { FormsModule } from '@angular/forms';
import { CustomFiveCounterComponent } from './components/custom-five-counter/custom-five-counter.component';
import { CustomFiveCounter2Component } from './components/custom-five-counter2/custom-five-counter2.component';
import { ClockComponent } from './components/clock/clock.component';
import { MessageComponent } from './components/message/message.component';


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
    CustomFiveCounterComponent,
    CustomFiveCounter2Component,
    ClockComponent,
    MessageComponent,
  ],
  providers: [StateService],
})
export class Solution2Module { }
