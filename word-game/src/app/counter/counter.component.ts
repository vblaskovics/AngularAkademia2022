import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordGameService } from '../services/word-game.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // counterPrint: number = 5;

  constructor(public wgservice: WordGameService) { }

  ngOnInit(): void {
    this.wgservice.countDown();
  }

}
