import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing-game';


  constructor(public playerService: PlayerService){

  }


  onClick(){
    console.log(this.playerService.generateRandom());
  }
}
