import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-hider',
  templateUrl: './hider.component.html',
  styleUrls: ['./hider.component.css']
})
export class HiderComponent implements OnInit {

  showLogger: boolean = true;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
  }

  toggleLogger() {
    this.showLogger = !this.showLogger
    this.stateService.toggleLogger(this.showLogger)
  }

}
