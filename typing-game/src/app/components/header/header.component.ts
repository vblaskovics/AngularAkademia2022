import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy  {

  sub?: Subscription;
  counting: number = 5;

  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
    const source = interval(1000)
    this.sub = source.subscribe(val => this.counter())

  }

  counter(){
    this.counting--;
    if(this.counting === 0) {
      this.counting = 5;
    }
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }
}
