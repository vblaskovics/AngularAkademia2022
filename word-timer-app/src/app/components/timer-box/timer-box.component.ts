import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-timer-box',
  templateUrl: './timer-box.component.html',
  styleUrls: ['./timer-box.component.css'],
})
export class TimerBoxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  counter() {
    const duration = 50;

    interval(1000)
      .pipe(
        take(duration),
        map((count) => duration - count)
      )
      .subscribe((seconds) => {
        console.log(seconds);
      });
  }
}
