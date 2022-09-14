import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution.component.html'
})
export class SolutionComponent implements OnInit {
  timerState: 'Mutat'|'Elrejt' = 'Elrejt';

  constructor() { }

  ngOnInit(): void {
  }

  get showTimer():boolean {
    return this.timerState === 'Mutat' ? false : true;
  }

  toggleTimerState(): void {
    this.timerState = this.timerState === 'Mutat' ? 'Elrejt' : 'Mutat'; 
  }

}
