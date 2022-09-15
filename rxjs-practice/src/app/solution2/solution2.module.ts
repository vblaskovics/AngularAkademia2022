import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { DisplayComponent } from './components/display/display.component';
import { TypingFieldComponent } from './components/typing-field/typing-field.component';
import { SolutionComponent } from './solution.component';
import { ScoreComponent } from './components/score/score.component';
import { StateService } from './services/state.service';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './components/timer/timer.component';
import { Timer2Component } from './components/timer2/timer2.component';
import { SpecialEventComponent } from './components/special-event/special-event.component';
import { SpecialEvent2Component } from './components/special-event2/special-event2.component';


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
    TimerComponent,
    Timer2Component,
    SpecialEventComponent,
    SpecialEvent2Component,
  ],
  providers: [StateService],
})
export class Solution2Module { }
