import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution.component.html'
})
export class SolutionComponent implements OnInit {

  isChecked?: boolean;
  timerState: 'Mutat'|'Elrejt' = 'Elrejt';

  constructor(public stateService:StateService) { }

  ngOnInit(): void {
  }
  get showTimer():boolean {
    return this.timerState === 'Mutat' ? false : true;
  }

  toggleTimerState(): void {
    this.timerState = this.timerState === 'Mutat' ? 'Elrejt' : 'Mutat';
  }


}
