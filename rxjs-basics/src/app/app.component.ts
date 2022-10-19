import { Component } from '@angular/core';
import { map, Observable, of, share, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-basics';

  constructor() {
//irj egy observablet, ami a feliratkozónak elküld egya random számot




  /* this.learn_01_of(); */
  /* this.learn_02_subscriber(); */
  /* this.learn_03_setTimeOut() */
  /* this.learn_04_unicast() */
  /* this.learn_05_multicast() */
  /* this.learn_06_coldObs() */
  /* this.learn_07_hotObs() */
  /* this.learn_08_dummySub(); */
  /* this.learn_09_obsExecution(); */
  this.learn_10_multicastExecution();
  }

  learn_01_of(): void {
    of(1, 2, 3).subscribe((v: number) => {
      console.log('of value', v);
    })

    of(1, 2, 4).pipe(map((v) => v * 2)).subscribe((v) => {
      console.log('of value * 2', v);
    })

    let obs1: Observable<number> = of(1, 2, 4).pipe(map((v) => v * 3));
    obs1.subscribe((v) => {
      console.log('obs1 value', v);
    })
  }

  learn_02_subscriber(): void {
    let obs = new Observable((subscriber) => {
      subscriber.next('hi');
      subscriber.next('hello');
      subscriber.complete();
    });

    obs.subscribe({
      next: (v) => console.log('subscriber object', v)

    })

    obs.subscribe((v) => console.log('subscriber function', v));
  }

  learn_03_setTimeOut(): void {
    let obs2 = new Observable<string>((subscriber) => {
      setTimeout(() => {
        subscriber.next('hello');
        subscriber.complete();
      }, 3000);
    });

    obs2.subscribe((v) => console.log('Timeout', v));
  }

  learn_04_unicast(): void {
    let obs3: Observable<string> = new Observable<string>((subscriber) => {
      subscriber.next('Hello World');
      subscriber.complete();
    }).pipe(
      tap(() => console.log('Called')),
    )

    obs3.subscribe((v) => console.log('első sub', v));
    obs3.subscribe((v) => console.log('második sub', v));
  }

  learn_05_multicast(): void {
    let obs4: Observable<string> = new Observable<string>((subscriber) => {
      setTimeout(() => {
        subscriber.next('Hello World');
        subscriber.complete();
      },1);
    }).pipe(
      tap(() => console.log('Called')),
      share()
    )

    obs4.subscribe((v) => console.log('első sub', v));
    obs4.subscribe((v) => console.log('második sub', v));
  }

  learn_06_coldObs(): void {
    //data produced inside of the observable
    let obs5 = new Observable<number>((subscriber) => {
      subscriber.next(Math.floor(Math.random() * 10) + 1);
      subscriber.complete();
    });

    obs5.subscribe((v) => console.log('első sub', v));
    obs5.subscribe((v) => console.log('második sub', v));

  }

  learn_07_hotObs(): void {
    //data produced outside of the observable
    let randomNum = Math.floor(Math.random() * 10) + 1;
    let obs6 = new Observable<number>((subscriber) => {
      subscriber.next(randomNum);
      subscriber.complete();
    });

    obs6.subscribe((v) => console.log('első sub', v));
    obs6.subscribe((v) => console.log('második sub', v));
  }

  learn_08_dummySub(): void {
    let sub1 = new Subject<string>();
    sub1.subscribe((v) => console.log('sub1 data', v));

    sub1.next('Hello');
  }

  learn_09_obsExecution(): void {

    let obs7: Observable<string> = new Observable<string>((subscriber) => {
      subscriber.next('Hello World');
      subscriber.complete();
    }).pipe(
      tap(() => console.log('Called')),
    )

    let sub2 = new Subject<string>();

    sub2.subscribe((v) => console.log('első sub', v));
    sub2.subscribe((v) => console.log('második sub', v));
    obs7.subscribe(sub2);
    sub2.subscribe((v) => console.log('harmadik sub', v));
    obs7.subscribe((v) => console.log('negyedik sub', v));
  }

  learn_10_multicastExecution(): void {
    let obs8: Observable<string> = new Observable<string>((subscriber) => {
      setTimeout(() => {
        subscriber.next('Hello World');
        subscriber.complete();
      },1);
    }).pipe(
      tap(() => console.log('Called')),
      share()
    )

    let sub3 = new Subject<string>();
    sub3.subscribe((v) => console.log('első sub', v));
    sub3.subscribe((v) => console.log('második sub', v));
    obs8.subscribe(sub3);
    sub3.subscribe((v) => console.log('harmadik sub', v));
    obs8.subscribe((v) => console.log('negyedik sub', v));
  }
}
