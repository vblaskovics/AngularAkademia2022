import { Component, Input, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/service/display.service';
import { KillingSpreeCounterService } from 'src/app/service/killing-spree-counter.service';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css'],
})
export class DisplayAreaComponent implements OnInit {

  killerName: string;
  isKillingSpree: boolean = false;

  constructor( public displayService: DisplayService, private killingSpreeCounterService: KillingSpreeCounterService ) {
    this.killingSpreeCounterService.isKillingSpreeSubject.subscribe((name) => {
      this.killerName = name;
      this.isKillingSpree = true;
      setTimeout(() => {
        this.isKillingSpree = false;
      }, 3000)
    })
  }

  ngOnInit(): void {}
}
