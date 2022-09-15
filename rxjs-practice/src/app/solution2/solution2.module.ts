import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { DisplayComponent } from './components/display/display.component';
import { TypingFieldComponent } from './components/typing-field/typing-field.component';
import { SolutionComponent } from './solution.component';
import { ScoreComponent } from './components/score/score.component';
import { StateService } from './services/state.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggerComponent } from './components/logger/logger.component';
import { HiderComponent } from './components/hider/hider.component';
import { ContiniousCounterComponent } from './components/continious-counter/continious-counter.component';
import { PrimeGameComponent } from './components/prime-game/prime-game.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
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
    LoggerComponent,
    HiderComponent,
    ContiniousCounterComponent,
    PrimeGameComponent,
  ],
  providers: [StateService],
})
export class Solution2Module { }
