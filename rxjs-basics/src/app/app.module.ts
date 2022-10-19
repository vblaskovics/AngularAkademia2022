import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { map, Observable, of, share, Subject, subscribeOn, tap } from 'rxjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // this.learn_01_of();
    // this.learn_02_subscriber();
    // this.practice_observable_settimeout();
    // this.learn_03_multicast();
    // this.learn_06_cold();
    // this.learn_07_hot();
    this.learn_09_observable_execution();
  }

  learn_01_of(): void {
    of(1, 2, 3).subscribe((v: number) => {
      console.log('of value', v);
    });

    of(1, 2, 3)
      .pipe(map((v) => v * 2))
      .subscribe((v) => {
        console.log('of value * 2', v);
      });

    let obs1: Observable<number> = of(1, 2, 3).pipe(map((v) => v * 3));
    obs1.subscribe((v) => console.log('obs1 value', v));
  }

  learn_02_subscriber(): void {
    let obs = new Observable((subscriber) => {
      subscriber.next('hello');
      subscriber.next('word');
      subscriber.complete();
    });

    obs.subscribe({
      next: (value) => console.log('subscriber object', value),
    });

    obs.subscribe((value) => console.log('subscriber function', value));
  }

  practice_observable_settimeout(): void {
    let obs = new Observable<string>((subscriber) => {
      setTimeout(() => {
        subscriber.next('Send message after 3 sec');
        subscriber.complete();
      }, 3000);
    });
    obs.subscribe((value) => console.log(value));
  }

  learn_03_multicast(): void {
    let obs: Observable<string> = new Observable<string>((subscriber) => {
      setTimeout(() => {
        subscriber.next('Hello word!');
        subscriber.complete();
      }, 1);
    }).pipe(
      tap(() => console.log('called!')),
      // share operátor: erre az observable-re többen is fel fognak iratkozni, csak egyszer fut le az observable belső része; tap is csak egyszer fut le
      // csak aszinkron függvénynél működik
      // multicast így
      share()
    );
    obs.subscribe((v) => console.log('first subscriber', v));
    obs.subscribe((v) => console.log('second subscriber', v));
  }

  learn_06_cold(): void {
    // COLD - data produced inside
    let obs: Observable<number> = new Observable<number>((subscriber) => {
      let random = Math.floor(Math.random() * 10) + 1;
      subscriber.next(random);
      subscriber.complete();
    });
    obs.subscribe((v) => console.log('first sub', v));
    obs.subscribe((v) => console.log('second sub', v));
  }

  learn_07_hot(): void {
    // HOT - data produced outside
    let random = Math.floor(Math.random() * 10) + 1;
    let obs2: Observable<number> = new Observable<number>((subscriber) => {
      subscriber.next(random);
      subscriber.complete();
    });
    obs2.subscribe((v) => console.log('first sub', v));
    obs2.subscribe((v) => console.log('second sub', v));
  }

  learn_08_dummy_subject(): void {
    let sub1 = new Subject<string>();

    sub1.subscribe((v) => console.log('sub1 data', v));

    sub1.next('Hello word');
  }

  learn_09_observable_execution(): void {
    let obs: Observable<string> = new Observable<string>((subscriber) => {
      subscriber.next('Hello word!');
      subscriber.complete();
    }).pipe(tap(() => console.log('called!')));

    let sub1 = new Subject<string>();

    sub1.subscribe((v) => console.log('első sub', v));
    sub1.subscribe((v) => console.log('második sub', v));
    obs.subscribe(sub1);
    sub1.subscribe((v) => console.log('harmadik sub', v));
  }
}
