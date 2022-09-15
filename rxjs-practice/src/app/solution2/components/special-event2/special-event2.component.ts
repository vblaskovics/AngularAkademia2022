import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-special-event2',
  templateUrl: './special-event2.component.html',
  styleUrls: ['./special-event2.component.css']
})
export class SpecialEvent2Component implements OnInit {

  isVisible: boolean = false;

  constructor(private stateService: StateService) {
    this.stateService.specialEvent$
      .subscribe(() => this.showMessage());
  }

  showMessage(): void {
    this.isVisible = true;
    setTimeout(() => this.isVisible = false, 3000)
  }

  ngOnInit(): void {
  }

}
