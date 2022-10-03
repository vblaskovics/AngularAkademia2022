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

    // this.learn_10_multicast_execution();

    // this.learn_09_observable_execution();

    // this.learn_08_dummy_subject();

    // this.learn_07_hot();

    // this.learn_06_cold();

    // this.learn_05_multicast();

    // this.learn_04_unicast();

    // this.learn_03_setTimeOut();

    // this.learn_02_subscriber();

    //  this.learn_01_of();
  }

  learn_01_of(): void {
    of(1, 2, 3).subscribe((v: number) => {
      console.log(v); // - kiíratjuk, ami ezen az observable-on keresztül érkezett hozzánk
    })

    of(1, 2, 3).pipe(map((v) => v * 2)).subscribe((v) => {
      console.log('of value * 2', v);
    })
    // kiemelve változóba:;
    let obs1: Observable<Number> = of(1, 2, 3).pipe(map((v) => v * 3))
    // obs amin keresztül számok mennek
    // pipe is egy observable - ki tudjuk menteni egy obs-be
    obs1.subscribe((v) => {
      console.log('obs1 value', v);
    })
  }

  learn_02_subscriber(): void {
    let obs = new Observable((subscriber) => {
      subscriber.next('hello');
      subscriber.next('world');
      subscriber.complete();
    });
    // példányosítjuk az obst azzal, hogy ha majd vki subscribe-ol, akkor hívódjon meg ez a fv.
    //a subscriber az az objektum lesz, amit majd létrehoz a subscribe-oláskor:

    obs.subscribe({
      next: (value) => console.log('subscriber object', value)
    })
    obs.subscribe((value) => console.log('subscriber object', value))
    // ha sajátot írunk, át kell adni egy fv-t, aminek át kell adni a saját feliratkozóját,
    // amivel majd meghívódik a fv.
    // subscriber egy objektum lesz next, error, complete-tel stb. - ezt a fv-t automatikusan nextként kezeli
    // ezt a nextet meg lehet hívni egy adattal
    // le kell zárni!
    // fel kell rá iratkoznin - objecttel is lehet
    // functionnel is -lehet (de ő ilyenkor létrehozza azt az objektumot mint előbb, ez csak egyszerűsítés)
  }

  learn_03_setTimeOut(): void {
    //obs ami feliratkozás után 3 mp-el elküld egy szöveges üzenetet, és le is zárja magát
    let obs2 = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next('some text');
        subscriber.complete();
      }, 3000);
    })

    obs2.subscribe((value) => console.log('obs2 value:', value))
  }

  learn_04_unicast(): void {
    // obs kiírja, hogy hello world, logol egyet és lezárja magát
    let obs: Observable<string> = new Observable<string>((subscriber) => {
      // console.log('meg lettem hívva');
      subscriber.next('hello world');
      subscriber.complete();
    }).pipe(
      tap(() => console.log('meg lettem hívva'))
    )

    // két subscriber:
    obs.subscribe((v) => console.log('első sub:', v));
    obs.subscribe((v) => console.log('második sub:', v));

    // ugyanaz mint:
    // new Observable<string>((subscriber) => {
    //   // console.log('meg lettem hívva');
    //   subscriber.next('hello world');
    //   subscriber.complete();
    // }).pipe(
    //   tap(() => console.log('meg lettem hívva'))
    // ).subscribe((v) => console.log('első sub:', v))
  }

  learn_05_multicast(): void {
    let obs: Observable<string> = new Observable<string>((subscriber) => {
      setTimeout(() => {
        subscriber.next('hello world');
        subscriber.complete();
      }); // így is lehet, ms nélkül, akkor csak annyi, h ne most hívódjon meg, hanem a jelenleg meghívott fv-ek után
    }).pipe(
      tap(() => console.log('meg lettem hívva')),
      share()  // a share operátor gondoskodik arról h erre az obs-rre többen is fel tudnak iratkozni -
      // belső rész csak egyszer fut le - multicast
    )

    obs.subscribe((v) => console.log('első sub:', v));
    obs.subscribe((v) => console.log('második sub:', v));

  }

  learn_06_cold(): void {
    //írj egy obs-t ami a feliratkozójának elküld egy random számot 1-10 között
    //COLD Observable - data produced inside:
    let obs = new Observable((subscriber) => {
      let random = Math.floor(Math.random() * 10) + 1;
      subscriber.next(random);
      subscriber.complete();
    })

    obs.subscribe((v) => console.log('első sub:', v));
    obs.subscribe((v) => console.log('második sub:', v));
  }

  learn_07_hot(): void {
    //HOT Observable - data produced outside:
    let random = Math.floor(Math.random() * 10) + 1;
    let obs = new Observable((subscriber) => {
      subscriber.next(random);
      subscriber.complete();
    })

    obs.subscribe((v) => console.log('első sub:', v));
    obs.subscribe((v) => console.log('második sub:', v));
  }

  learn_08_dummy_subject(): void {
    let sub1 = new Subject<string>();

    sub1.subscribe((v) => console.log('sub1 data:', v));

    sub1.next('hello world');
    // amit neki benextelnek, azt továbbadja a subscribereknek
  }

  learn_09_observable_execution(): void {
    //unicast obs:
    let obs: Observable<string> = new Observable<string>((subscriber) => {
      subscriber.next('hello world');
      subscriber.complete();
    }).pipe(
      tap(() => console.log('meg lettem hívva'))
    )

    let sub1 = new Subject<string>();

    sub1.subscribe((v) => console.log('első sub:', v));
    sub1.subscribe((v) => console.log('második sub:', v));

    obs.subscribe(sub1);
    // kijön h a subject multicast default-ból, többen fel tudtak iratkozni, de a belső fv csak egyszer futott le

    sub1.subscribe((v) => console.log('harmadik sub:', v));
    // de ez már nem hívódik meg

    obs.subscribe((v) => console.log('negyedik sub:', v));
    // ez már megjön - de a harmadik ekkor sem kapja meg
  }

  learn_10_multicast_execution(): void {
    //de ha multicast obs, akkor meghívódik a harmadik is - mindenkinek ugyanazt az executiont hívja meg:
    let obs: Observable<string> = new Observable<string>((subscriber) => {
      setTimeout(() => {
        subscriber.next('hello world');
        subscriber.complete();
      });

    }).pipe(
      tap(() => console.log('meg lettem hívva')),
      share()
    )

    let sub1 = new Subject<string>();

    sub1.subscribe((v) => console.log('első sub:', v));
    sub1.subscribe((v) => console.log('második sub:', v));

    obs.subscribe(sub1);
    // kijön h a subject multicast default-ból, többen fel tudtak iratkozni, de a belső fv csak egyszer futott le

    sub1.subscribe((v) => console.log('harmadik sub:', v));

    obs.subscribe((v) => console.log('negyedik sub:', v));

  }
}
