import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './solution.component';
import { CounterComponent } from './components/counter/counter.component';
import { DisplayComponent } from './components/display/display.component';
import { ScoreComponent } from './components/score/score.component';
import { TypingFieldComponent } from './components/typing-field/typing-field.component';
import { FormsModule } from '@angular/forms';
import { StateService } from './services/state.service';



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
  providers: [StateService]
})
export class Solution2myModule { }
