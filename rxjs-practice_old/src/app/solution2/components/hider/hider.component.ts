import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hider',
  templateUrl: './hider.component.html',
  styleUrls: ['./hider.component.css'],
})
export class HiderComponent implements OnInit {
  hideStatus: boolean = true;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {}

  toggleLogger() {
    this.hideStatus = !this.hideStatus;
    this.stateService.showLoggerStatus.next(this.hideStatus);
  }
}
