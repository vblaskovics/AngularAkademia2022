import { Component, OnInit } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution.component.html'
})
export class SolutionComponent implements OnInit {


  elapsedTotalTime$: Observable<number> = new Observable();
  elapsedBoolean = false;
  isPrime = false;
  counter = 0;

  constructor(private stateService: StateService) {

  }

  ngOnInit(): void {
    this.elapsedTotalTime$ = this.stateService.elapsedTime$.pipe()

    this.elapsedTotalTime$.subscribe(time => {
      this.counter = 0;
      for(let i = 1; i <= time; i++){
        if(time % i === 0){
          this.counter++
        }
      }
      if(this.counter <= 2 && time > 5){
        this.isPrime = true
        setTimeout(() => {
          this.isPrime = false
        }, 3000);

      }

    })
    }



  showElapsedTime(): void {
    this.elapsedBoolean = !this.elapsedBoolean
  };


}
