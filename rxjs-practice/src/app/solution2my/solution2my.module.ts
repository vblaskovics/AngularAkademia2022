import { StateService } from './services/state.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './solution.component';
import { CounterComponent } from './components/counter/counter.component';
import { DisplayComponent } from './components/display/display.component';
import { ScoreComponent } from './components/score/score.component';
import { TypingFieldComponent } from './components/typing-field/typing-field.component';



@NgModule({
  declarations: [
    SolutionComponent,
    CounterComponent,
    DisplayComponent,
    ScoreComponent,
    TypingFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SolutionComponent
  ],
  providers: [
    StateService
  ]
})
export class Solution2myModule { }
