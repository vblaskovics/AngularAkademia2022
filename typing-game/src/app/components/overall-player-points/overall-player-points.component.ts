import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-overall-player-points',
  templateUrl: './overall-player-points.component.html',
  styleUrls: ['./overall-player-points.component.css']
})
export class OverallPlayerPointsComponent implements OnInit {

  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {

  }

}
