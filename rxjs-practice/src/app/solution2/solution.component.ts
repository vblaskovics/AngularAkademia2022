import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution.component.html'
})
export class SolutionComponent implements OnInit {

  showLogger: boolean = true

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    // this.stateService.showLogger.subscribe((value) => {
    //   this.showLogger = value
    // })
  }

}
