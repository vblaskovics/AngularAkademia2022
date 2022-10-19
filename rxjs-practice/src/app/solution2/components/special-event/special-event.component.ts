import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-special-event',
  templateUrl: './special-event.component.html',
  styleUrls: ['./special-event.component.css']
})
export class SpecialEventComponent implements OnInit {

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
