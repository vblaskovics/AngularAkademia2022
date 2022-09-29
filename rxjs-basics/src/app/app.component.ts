import { Component } from '@angular/core';
import { map, Observable, of, scan, share, Subject, tap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-basics';

  constructor() {
    
    

    // this.learn_01_of();
    // this.learn_02_subscriber();
    // this.learn_03_setTimeOut();
    // this.learn_04_unicast();
    // this.learn_05_multicast();
    // this.learn_06_cold();
    // this.learn_07_hot();
    // this.learn_08_dummy_subject();
    // this.learn_09_observable_execution();
    // this.learn_10_multicast_execution();
  

  }

  learn_01_of(): void {
    of(1, 2, 3).subscribe((v: number) => {
      console.log('of value', v);
    })

    of(1, 2, 3).pipe(map((v) => v * 2)).subscribe((v) => {
      console.log('of value * 2', v);
    })

    let obs1: Observable<number> = of(1, 2, 3).pipe(map((v) => v * 3));
    obs1.subscribe((v) => {
      console.log('obs1 value', v);
    });
  }

  learn_02_subscriber(): void {
    let obs = new Observable<string>((subscriber) => {
      subscriber.next('hello');
      subscriber.next('world');
      subscriber.complete();
    });

    obs.subscribe({
      next: (value) => console.log('subscriber object', value)
    });

    obs.subscribe((value) => console.log('subscriber function', value));
  }

  learn_03_setTimeOut(): void {
    // Feladat
    // Írj egy observable-t, ami felíratkozás után 3 mp-el elküld egy szöveges
    // üzenetet, és le is zárja magát!

    let obs2 = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next('hello');
        subscriber.complete();
      }, 3000);
    });

    obs2.subscribe((v) => console.log(v));
  }

  learn_04_unicast(): void {
    let obs: Observable<string> = new Observable<string>((subscriber) => {
      subscriber.next("hello world");
      subscriber.complete();
    }).pipe(
      tap(() => { console.log('meg lettem hívva') }),
    )

    obs.subscribe((v) => console.log('első sub', v));
    obs.subscribe((v) => console.log('második sub', v));
  }

  learn_05_multicast(): void {
    let obs: Observable<string> = new Observable<string>((subscriber) => {
      setTimeout(() => {
        subscriber.next("hello world");
        subscriber.complete();
      }, 1);
    }).pipe(
      tap(() => { console.log('meg lettem hívva') }),
      share()
    )

    obs.subscribe((v) => console.log('első sub', v));
    obs.subscribe((v) => console.log('második sub', v));
  }

  learn_06_cold(): void {
    // COLD - data produced inside
    let obs: Observable<number> = new Observable<number>((subscriber) => {
      let random = Math.floor(Math.random() * 10) + 1;
      subscriber.next(random);
      subscriber.complete();
    })

    obs.subscribe((v) => console.log('első sub', v));
    obs.subscribe((v) => console.log('második sub', v));
  }

  learn_07_hot(): void {
    // HOT - data produced outside
    let random = Math.floor(Math.random() * 10) + 1;
    let obs: Observable<number> = new Observable<number>((subscriber) => {
      subscriber.next(random);
      subscriber.complete();
    })

    obs.subscribe((v) => console.log('első sub', v));
    obs.subscribe((v) => console.log('második sub', v));
  }

  learn_08_dummy_subject(): void {
    let sub1 = new Subject<string>();
    sub1.subscribe((v) => console.log('sub1 data:', v));
    sub1.next('Hello world');
  }

  learn_09_observable_execution(): void {
    let obs: Observable<string> = new Observable<string>((subscriber) => {
      subscriber.next("hello world");
      subscriber.complete();
    }).pipe(
      tap(() => { console.log('meg lettem hívva') }),
    )

    let sub1 = new Subject<string>();

    sub1.subscribe((v) => console.log('első sub:', v));
    sub1.subscribe((v) => console.log('második sub:', v));
    obs.subscribe(sub1);
    sub1.subscribe((v) => console.log('harmadik sub:', v));
  }

  learn_10_multicast_execution(): void {
    let obs: Observable<string> = new Observable<string>((subscriber) => {
      setTimeout(() => {
        subscriber.next("hello world");
        subscriber.complete();
      })
    }).pipe(
      tap(() => { console.log('meg lettem hívva') }),
      share()
    )

    let sub1 = new Subject<string>();

    sub1.subscribe((v) => console.log('első sub:', v));
    sub1.subscribe((v) => console.log('második sub:', v));
    obs.subscribe(sub1);
    sub1.subscribe((v) => console.log('harmadik sub:', v));
    obs.subscribe((v) => console.log('negyedik sub:', v));
  }
}
