import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-random-word-generator',
  templateUrl: './random-word-generator.component.html',
  styleUrls: ['./random-word-generator.component.css']
})
export class RandomWordGeneratorComponent implements OnInit, OnDestroy {

  sub?: Subscription;
  text: string = '';
  text2: string = '';


  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
    const source = interval(5000)
    this.sub = source.subscribe(val => this.playerService.helpingstring = this.playerService.generateRandom())
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }
}
