import { Component, Input, OnInit } from '@angular/core';
import { KillingSpreeCounterService } from 'src/app/service/killing-spree-counter.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() name: string;

  constructor() {}

  ngOnInit(): void {
  }

}
