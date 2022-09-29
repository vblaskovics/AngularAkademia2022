import { Component } from '@angular/core';
import {map, Observable, of, share, Subject, tap} from "rxjs";

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
    // this.learn_03_setTimeout();
    // this.learn_04_unicast();
    // this.learn_05_multicast();
    // this.learn_06_hot_obs();
    // this.learn_07_cold_obs();
    // this.learn_08_dummy_subject();
    this.learn_09_unicat_obs_execution();
    // this.learn_10_obs_multicast_execution()



  }

  learn_01_of(): void {
    // cold observable, saját magán belül generál adatot
    of(1,2,3).subscribe((v) => {
      console.log('of value: ', v);
    });

    of(1,2,3).pipe(map((v) => v*2)).subscribe((v) => {
      console.log('of value * 2: ', v);
    });

    let obs1: Observable<number> = of(1,2,3).pipe(map((v) => v*3));

    obs1.subscribe((v) => console.log('obs value: ', v))
  }

  learn_02_subscriber(): void {
    let obs = new Observable((subscriber) => {
      subscriber.next('hello');
      subscriber.next('world');
      subscriber.complete();
    });

    obs.subscribe({
      next: (value) => console.log('subscriber obj: ', value)
    });

    obs.subscribe((value) => console.log('subscriber func: ', value))
  }

  learn_03_setTimeout(): void {
    const obs2: Observable<string> = new Observable<string>((subscriber) => {
      setTimeout(() => {
        subscriber.next('háj')
        subscriber.complete();
      }, 3000)
    })

    obs2.subscribe((v) => console.log(v));
  }

  learn_04_unicast(): void {
    const obs: Observable<string> = new Observable<string>((subscriber) =>{
      subscriber.next('hello world');
      subscriber.complete();
    }).pipe(
      tap((v) => console.log('meg lettem hívva'))
    )

    obs.subscribe((v) => console.log('1. sub: ,', v));
    obs.subscribe((v) => console.log('2. sub: ,', v));
  }

  learn_05_multicast(): void {
    const obs: Observable<string> = new Observable<string>((subscriber) =>{
      setTimeout(() => {
        subscriber.next('hello world');
        subscriber.complete();
      }, 1);
    }).pipe(
      tap((v) => console.log('meg lettem hívva')),
      share()
    )

    obs.subscribe((v) => console.log('1. sub: ,', v));
    obs.subscribe((v) => console.log('2. sub: ,', v));
  }

  learn_06_hot_obs(): void {
    // HOT OBSERVABLE - data produced outside
    const randomNum: number = Math.floor(Math.random() * 10) + 1;
    const obs: Observable<number> = new Observable<number>((subscriber) => {

      subscriber.next(randomNum);
      subscriber.complete();
    })

    obs.subscribe((v) => console.log('1. sub: ', v));
    obs.subscribe((v) => console.log('2. sub: ', v));
  }

  learn_07_cold_obs() : void {
    // COLD OBSERVABLE - data produced inside
    const obs: Observable<number> = new Observable<number>((subscriber) => {
      const randomNum: number = Math.floor(Math.random() * 10) + 1;

      subscriber.next(randomNum);
      subscriber.complete();
    })

    obs.subscribe((v) => console.log('1. sub: ', v));
    obs.subscribe((v) => console.log('2. sub: ', v));
  }

  learn_08_dummy_subject(): void {
    let sub1 = new Subject<string>();
    sub1.subscribe(value => console.log('sub1 data: ', value));
    sub1.next('hellooo');
  }

  learn_09_unicat_obs_execution(): void {
    //EAGER, observable csak akkor fut le amikor az obs-ra iratkoznak fel, nem akkor amikor a subjectre
    const obs: Observable<string> = new Observable<string>((subscriber) =>{
      subscriber.next('hello world');
      subscriber.complete();
    }).pipe(
      tap((v) => console.log('meg lettem hívva'))
    )

    let sub1 = new Subject<string>();
    //subject default-ból multicast
    sub1.subscribe((v) => console.log('1. sub: ,', v));
    sub1.subscribe((v) => console.log('2. sub: ,', v));
    obs.subscribe(sub1); // triggeli a nextet és ellövi az első 2 subs-ot
    // azért nem kap adatot, mert a subjectre iratkozok fel, nem az obs-ra, így az nem fut le, nem küld adatot
    sub1.subscribe((v) => console.log('3. sub: ,', v));
    obs.subscribe(sub1); // a "meglettem hívva" lefut, de a subjectnek azért nem küld újra adatot, mert a complete már lezárta erre a referenciára a feliratkozást
    // unicast az obs, ezért csak ez a subs kapja meg az adatot
    obs.subscribe((v) => console.log('4. sub: ,', v));
  }

  learn_10_obs_multicast_execution(): void {
    // share miatt multicast, tehát mindenki megkapja az adatokat
    const obs: Observable<string> = new Observable<string>((subscriber) =>{
      setTimeout(() => {
        subscriber.next('hello world');
        subscriber.complete();
      })

    }).pipe(
      tap((v) => console.log('meg lettem hívva')),
      share()
    )

    let sub1 = new Subject<string>();
    sub1.subscribe((v) => console.log('1. sub: ,', v));
    sub1.subscribe((v) => console.log('2. sub: ,', v));
    obs.subscribe(sub1); // kapcsolat a subjecttel
    sub1.subscribe((v) => console.log('3. sub: ,', v));

    // első sub és a második sub, azért nem kapja meg újra, mert ők már egyszer beálltak a sorba,
    // multicast -> tehát egyszer fut le, egyszer kap adatot
    obs.subscribe((v) => console.log('4. sub: ,', v));
  }
}
