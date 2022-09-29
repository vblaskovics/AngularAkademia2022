import { Component } from '@angular/core';
import { map, Observable, of, scan, share, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-basics';

  constructor() {

    // Feladat
    // Írj egy observable-t, ami felíratkozás után 3 mp-el elküld egy szöveges
    // üzenetet, és le is zárja magát!


    // this.learn_01_of();
    // this.learn_02_subscriber();
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
    let obs = new Observable((subscriber) => {
      subscriber.next('hello');
      subscriber.next('world');
      subscriber.complete();
    });

    obs.subscribe({
      next: (value) => console.log('subscriber object', value)
    });

    obs.subscribe((value) => console.log('subscriber function', value));
  }
}
