import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { DisplayService } from 'src/app/service/display.service';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css'],
})
export class DisplayAreaComponent implements OnInit {
  @Input() historyText: string = '';

  constructor() {}

  ngOnInit(): void {}
}
