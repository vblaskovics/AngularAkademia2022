import { Component, Input, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css']
})
export class DisplayAreaComponent implements OnInit {

  @Input() historyText?: string;

  constructor(private gameService: GameService, private displayService: DisplayService) {
   }

  ngOnInit(): void {
  }

}
