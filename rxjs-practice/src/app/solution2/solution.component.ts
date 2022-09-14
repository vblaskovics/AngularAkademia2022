import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution.component.html'
})
export class SolutionComponent implements OnInit {

  isVisible: boolean = true;
  time$;


  constructor(public stateService: StateService) { 
    this.time$ = this.stateService.time$
  }

  ngOnInit(): void {
  }

}
