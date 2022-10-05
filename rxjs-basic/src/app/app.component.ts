import { Component } from '@angular/core';
import { of, map, Observable, tap, share, Subject,} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-basic';

  constructor() {

    // this.learn_01_of();
    // this.learn_02_subscriber();
    // this.learn_03_setTimeOut();
    // this.learn_04_unicast();
    // this.learn_05_multicast();
    // this.learn_06_cold();
    // this.learn_07_hot();
    // this.learn_08_dummy_subject;
    // this.learn_09_observable_execution;

  }

  learn_01_of(): void {
    // cold observable (saját magukban generálják a )
    of(1, 2, 3).subscribe(v=> console.log('of value', v))

    of(1, 2, 3).pipe(map(v => v*2)).subscribe(v => console.log('of value * 2', v));

    let obs1: Observable<number> = of(1,2,3).pipe(map(v => v*3))
    obs1.subscribe(v => console.log('obs1 value', v))
  }

  learn_02_subscriber(){
    let obs = new Observable((subscriber) => {
      subscriber.next('hello');
      subscriber.next('hello world');
      subscriber.complete();
    })

    obs.subscribe({
      next: (value) => console.log('subscripber object', value)
    })

    obs.subscribe(value => console.log('subscriber function', value))
  }

  learn_03_setTimeOut(): void {
    let obsDelay = new Observable((subscriber) => {
      subscriber.next('start')
      setTimeout(() => {
        subscriber.next('hali');
        subscriber.complete();
      }, 3000)
    })

    obsDelay.subscribe(value => {
      console.log(value)
    })
  }

  learn_04_unicast(): void{
    let obs: Observable<string> = new Observable<string>(subscriber => {
      // console.log('meg lettem hívva');
      subscriber.next("hello world");
      subscriber.complete();
    }).pipe(tap(() => console.log('meg lettem hívva')))

    obs.subscribe(v => console.log('első sub', v))
    obs.subscribe(v => console.log('második sub', v))
  }

  learn_05_multicast(): void {
    let obs: Observable<string> = new Observable<string>(subscriber => {
      // console.log('meg lettem hívva');
      setTimeout(()=> {
        subscriber.next("hello world");
        subscriber.complete();
      },1)
    }).pipe(
      tap(() => console.log('meg lettem hívva')),
      share()
    )

    obs.subscribe(v => console.log('első sub', v))
    obs.subscribe(v => console.log('második sub', v))
  }

  learn_06_cold(): void {
    // COLD - DATA PRODUCED INSIDE
    let obsRandom: Observable<number> = new Observable<number>(subscriber => {
      let randomNumber = Math.floor(Math.random() * 10 + 1)
      subscriber.next(randomNumber);
      subscriber.complete();
    })

    obsRandom.subscribe(num => console.log(num))
    obsRandom.subscribe(num => console.log(num))
  }

  learn_07_hot(): void {
    
    //HOT - DATA PRODUCED OUTSIDE
    let randomNumber = Math.floor(Math.random() * 10 + 1)
    let obsRandom2: Observable<number> = new Observable<number>(subscriber => {
      subscriber.next(randomNumber);
      subscriber.complete();
    })

    obsRandom2.subscribe(num => console.log(num))
    obsRandom2.subscribe(num => console.log(num))
  }

  learn_08_dummy_subject(): void {
    let sub1 = new Subject<string>();

    sub1.subscribe(v => console.log('sub1 data:', v))

    sub1.next('Hello World!')
  }

  learn_09_observable_execution(): void {
    let obs: Observable<string> = new Observable<string>(subscriber => {
      subscriber.next("hello world");
      subscriber.complete();
    }).pipe(tap(() => console.log('meg lettem hívva')))

    let sub1 = new Subject<string>();
    
    sub1.subscribe(v => console.log('első sub', v));
    sub1.subscribe(v => console.log('második sub', v));
    obs.subscribe(sub1);
    sub1.subscribe(v => console.log('harmadik sub', v));
    obs.subscribe(v => console.log('negyedik sub:', v))
  }
}
