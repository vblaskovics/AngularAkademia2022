import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-special-event',
  templateUrl: './special-event.component.html',
  styleUrls: ['./special-event.component.css']
})
export class SpecialEventComponent implements OnInit {

  isVisible:boolean = false;

  constructor(private stateService: StateService) {
    this.stateService.elapsedTime$.pipe(
      filter((t) => t > 5),
      filter((t) => this.isPrime(t)))
      .subscribe(() => this.showMessage());
  }

  isPrime(num: number): boolean {
    if (num === 0) return false;
    if (num === 1) return true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  showMessage(): void {
    this.isVisible = true;
    setTimeout(() => this.isVisible = false, 3000)
  }

  ngOnInit(): void {
  }

}