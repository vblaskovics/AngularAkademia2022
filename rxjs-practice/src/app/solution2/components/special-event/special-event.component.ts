import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-special-event',
  templateUrl: './special-event.component.html',
  styleUrls: ['./special-event.component.css']
})
export class SpecialEventComponent implements OnInit {

  time$: Observable<number> = new Observable();
  timeSubscription?: Subscription;
  message: string = 'Special Event!!!💥'
  isVisible: boolean = false;

  constructor(private stateService: StateService) {  this.stateService.elapsedTime$.pipe(
    filter((t) => t > 5),
    filter((t) => this.isPrime(t)))
    .subscribe(() => this.showMessage());
  }

  ngOnInit(): void {
    // this.time$ = this.stateService.elapsedTime$.pipe();

    // this.time$.pipe(map((t) => {
    //   if(this.isPrime(t) === true && t > 5) {
    //     this.setAlert()
    //   };
    // }));

    // this.time$.subscribe(() => {
    //   if(this.isPrime(t) === true && t > 5) {
    //     this.setAlert()
    //   };
    // });

    // this.timeSubscription = this.stateService.elapsedTime$.pipe(
    //      filter((t) => this.isPrime(t) === true && t > 5),
    //     ).subscribe((t) => {
    //       console.log('special event');
    //       this.setAlert();
    //      });
  }

  isPrime(num: number): boolean {
    if (num === 0 ) return false;
    if (num === 1 ) return true;
    let maxCheck = Math.ceil(Math.sqrt(num));
    for (let i = 2; i <= maxCheck; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // setAlert() {
  //   if(this.isVisible = true) {
  //      alert(this.message);
  //      setTimeout(() =>
  //     this.isVisible = false, 3000);
  //   }
  // }
  // setAlert() {
  //      window.alert(this.message);
  //      setTimeout(() =>
  //     window.close(), 3000);
  // }

  showMessage(): void {
    this.isVisible = true;
    setTimeout(() => this.isVisible = false, 3000)
  }


}
