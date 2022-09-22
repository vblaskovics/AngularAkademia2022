// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Observable, map, filter, Subscription } from 'rxjs';
// import { StateService } from '../../services/state.service';

// @Component({
//   selector: 'app-prime-game',
//   templateUrl: './prime-game.component.html',
//   styleUrls: ['./prime-game.component.css']
// })
// export class PrimeGameComponent implements OnInit, OnDestroy {

//   time$: Observable<number> = new Observable<number>()
//   isPrime: boolean = false;
//   delay: boolean = false;
//   eventCounter: number = 0;

//   subscription?: Subscription

//   form: FormGroup

//   constructor(private stateService: StateService, fb: FormBuilder) { 
//     this.form = fb.group({
//       special: ['']
//     })
//   }

//   ngOnInit(): void {
//     this.time$ = this.stateService.counter2$.pipe(
//       map(t => t),
//     )

//     this.subscription = this.stateService.counter2$.subscribe(time => {
//         let counter = 0;
//         for(let i = 1; i <= time; i++){
//           if(time % i === 0){
//             counter++
//           }
//         }
//         if(counter <= 2 && time > 5){
//           this.eventCounter++
//           this.delay = true
//           this.modalDelay()
//           return this.isPrime = true

//         }
//         return this.isPrime = false;
//       })
//   }

//   modalDelay() {
//     setTimeout(() => {
//       this.delay = false
//     }, 3000)
//   }

//   onSubmit() {
//     let value = this.form.get('special')?.value
//     console.log(value)
//     if(value === "special event"){
//       this.eventCounter++
//       this.delay = true
//       this.modalDelay()
//     }
//   }

//   ngOnDestroy(): void {
//     this.subscription?.unsubscribe()
//   }


// }
