import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  visible = false;
  seCounter = 1;
  constructor(private stateService: StateService) {
    stateService.seEmiter$.subscribe(() => this.makeSpecialEvent());
  }
  makeSpecialEvent() {
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
      this.seCounter++;
    }, 3000);
  }

  ngOnInit(): void {}
}
