import { Component } from '@angular/core';
import { interval, map, Observable, of, scan, share, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-basics';

  constructor() {
    let observable: Observable<string> = new Observable<string>(
      (subscriber) => {
        subscriber.next('Hello');
        subscriber.complete();
      }
    ).pipe(
      tap(() => {
        console.log('meg lettem hívva');
      })
    );

    let sub1 = new Subject<string>();

    sub1.subscribe((v) => console.log('elso sub', v));
    sub1.subscribe((v) => console.log('második sub', v));
    observable.subscribe(sub1);
    sub1.subscribe((v) => console.log('harmadik sub', v));

    // this.learn_01_of();
    // this.learn_02_subscriber();
    //this.learn_03_setTimeout();
    //this.learn_04_unicast();
    //this.learn_05_multicast();
    //this.learn_06_01_hot();
    //this.learn_06_02_cold();
  }

  learn_01_of(): void {
    of(1, 2, 3)
      .pipe(map((v: number) => v * 2))
      .subscribe((v: number) => {
        console.log('of value * 2 ', v);
      });

    let obs1: Observable<number> = of(1, 2, 3).pipe(map((v: number) => v * 3));

    obs1.subscribe((v) => {
      console.log('os value * 3', v);
    });
  }

  learn_02_subscriber(): void {
    let obs = new Observable((subscriber) => {
      subscriber.next('Hello');
      subscriber.next('World');
      subscriber.complete();
    });

    obs.subscribe({
      next: (value) => console.log('subscriber object', value),
    });

    obs.subscribe((value) => console.log('subscriber function', value));
  }

  learn_03_setTimeout(): void {
    let observable = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next('Hello');
        subscriber.complete();
      }, 3000);
    });
    observable.subscribe((v) => console.log(v));
  }

  learn_04_unicast(): void {
    let observable: Observable<string> = new Observable<string>(
      (subscriber) => {
        subscriber.next('Hello');
        subscriber.complete();
      }
    ).pipe(tap((v) => console.log('meg lettem hívva', v)));

    observable.subscribe((v) => console.log('elso sub', v));
    observable.subscribe((v) => console.log('második sub', v));
  }

  learn_05_multicast(): void {
    let observable: Observable<string> = new Observable<string>(
      (subscriber) => {
        setTimeout(() => {
          subscriber.next('Hello');
          subscriber.complete();
        }, 1);
      }
    ).pipe(
      tap((v) => console.log('meg lettem hívva', v)),
      share()
    );

    observable.subscribe((v) => console.log('elso sub', v));
    observable.subscribe((v) => console.log('második sub', v));
  }

  learn_06_01_hot(): void {
    //HOT - Data produced outside
    let random = Math.floor(Math.random() * 10) + 1;
    let observable: Observable<number> = new Observable<number>(
      (subscriber) => {
        subscriber.next(random);
        subscriber.complete();
      }
    );

    observable.subscribe((v) => console.log('elso sub', v));
    observable.subscribe((v) => console.log('második sub', v));
  }

  learn_06_02_cold(): void {
    // COLD - Data prodcuced inside
    let observable: Observable<number> = new Observable<number>(
      (subscriber) => {
        let random = Math.floor(Math.random() * 10) + 1;
        subscriber.next(random);
        subscriber.complete();
      }
    );

    observable.subscribe((v) => console.log('elso sub', v));
    observable.subscribe((v) => console.log('második sub', v));
  }

  learn_07_subject(): void {
    let sub1 = new Subject<string>();
    sub1.subscribe((v) => console.log('sub1 data:', v));
    sub1.next('Hello World');
  }

  learn_10_multicast_execustion(): void {}
}
