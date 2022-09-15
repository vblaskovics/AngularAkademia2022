import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { DisplayComponent } from './components/display/display.component';
import { TypingFieldComponent } from './components/typing-field/typing-field.component';
import { SolutionComponent } from './solution.component';
import { ScoreComponent } from './components/score/score.component';
import { StateService } from './services/state.service';
import { FormsModule } from '@angular/forms';
import { ElapsedComponent } from './components/elapsed/elapsed.component';
import { HiderComponent } from './components/hider/hider.component';
import { Elapsed2Component } from './components/elapsed2/elapsed2.component';
import { TimerComponent } from './components/timer/timer.component';


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
    ElapsedComponent,
    HiderComponent,
    Elapsed2Component,
    TimerComponent,
  ],
  providers: [StateService],
})
export class Solution2Module { }
