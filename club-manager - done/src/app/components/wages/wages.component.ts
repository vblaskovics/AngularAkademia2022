import { PlayerService } from 'src/app/services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wages',
  templateUrl: './wages.component.html',
  styleUrls: ['./wages.component.scss']
})
export class WagesComponent implements OnInit {

  players = this.PlayerService.players

  constructor(private PlayerService: PlayerService) { }

  ngOnInit(): void {
  }

}
