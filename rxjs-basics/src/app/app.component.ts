import { Component } from '@angular/core';
import { map, Observable, of, share, Subscriber, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs-basics';

  constructor() {
    // this.learn_01_of();
    // this.learn_02_subscriber();
    // this.learn_03_setTimeOut();
    // this.learn_04_unicast();
    let obs: Observable<string> = new Observable<string>((subscriber) => {
      setTimeout(() => {
        console.log('Started');
        subscriber.next('Hello World');
        subscriber.complete();
      }, 1000);
    }).pipe(
      tap(() => console.log('tap called')),
      // így csak 1xer fut le (mert multicast-té válik) és nem 2xer mint a learn_04-ben! Ez a share csak async működés esetén jön ki!!!! (a setTimeout miatt lesz async) Tehát így először a 2db lenti subscribe fut le és csak utána indul el a setTimeout(). Ha eleve ez a cél, akkor késleltetés sem kell megadni h elérjük a célunkat!!!!
      share()
    );

    obs.subscribe((v) => console.log('First subscriber:', v));
    obs.subscribe((v) => console.log('Second subscriber:', v));
  }

  learn_01_of(): void {
    // cold observable: saját magán belül generálja az adatot amit elküldenek a feliratkozóiknak. Az of egy observable, amire subscribe-al feliratkozott a console.log fgv.
    of(1, 2, 3).subscribe((v: number) => {
      console.log('of value:', v);
    });

    of(1, 2, 3)
      .pipe(map((v) => v * 2))
      .subscribe((v) => {
        console.log('of value * 2:', v);
      });

    // pipe visszatérési értéke egy observable, ezért lehet egyenlővé tenni. Utána fel lehet rá iratkozni
    let obs1: Observable<number> = of(1, 2, 3).pipe(map((v) => v * 3));
    obs1.subscribe((v) => {
      console.log('obs1 of value * 3:', v);
    });
  }

  learn_02_subscriber(): void {
    let obs = new Observable((subscriber) => {
      subscriber.next('hello');
      subscriber.next('world');
      // le is kell zárni
      subscriber.complete();
    });

    //meg is kell hívni
    obs.subscribe({
      next: (value) => console.log('subscriber object:', value),
    });

    // function-ként is meg lehet hívni
    obs.subscribe((value) => {
      console.log('subscriber function:', value);
    });
  }

  learn_03_setTimeOut(): void {
    let obs = new Observable<string>((subscriber) => {
      subscriber.next('Start of waiting');
      setTimeout(() => {
        subscriber.next('Waited for 3 seconds');
        subscriber.complete();
      }, 3000);
    });

    obs.subscribe((value) => {
      console.log(value);
    });
  }

  learn_04_unicast(): void {
    // let obs: Observable<string> = new Observable<string>((subscriber) => {
    //   console.log('Started');
    //   subscriber.next('Hello World');
    //   subscriber.complete();
    // });

    // obs.subscribe((v) => console.log('First subscriber:', v));
    // // újra lefut az Observable-n belüli összes belső rész!!! (ahányszor subscribe-olsz) Az Observable Unicast-os, tehát 1vkinek kéne csak subscribe-olnia rá
    // obs.subscribe((v) => console.log('Second subscriber:', v));

    // let obs: Observable<string> = new Observable<string>((subscriber) => {
    //   console.log('Started');
    //   subscriber.next('Hello World');
    //   subscriber.complete();
    //   // először a tap fog meghívódni és csak utána a subscriber.next!!!
    // }).pipe(tap(() => console.log('tap called')));

    // obs.subscribe((v) => console.log('First subscriber:', v));
    // // újra lefut az Observable-n belüli összes belső rész!!! (ahányszor subscribe-olsz) Az Observable Unicast-os, tehát 1vkinek kéne csak subscribe-olnia rá
    // obs.subscribe((v) => console.log('Second subscriber:', v));

    let obs: Observable<string> = new Observable<string>((subscriber) => {
      console.log('Started');
      subscriber.next('Hello World');
      subscriber.complete();
      // először a tap fog meghívódni és csak utána a subscriber.next!!!
    }).pipe(tap(() => console.log('tap called')));

    obs.subscribe((v) => console.log('First subscriber:', v));
    // újra lefut az Observable-n belüli összes belső rész!!! (ahányszor subscribe-olsz) Az Observable Unicast-os, tehát 1vkinek kéne csak subscribe-olnia rá
    obs.subscribe((v) => console.log('Second subscriber:', v));
  }
}
