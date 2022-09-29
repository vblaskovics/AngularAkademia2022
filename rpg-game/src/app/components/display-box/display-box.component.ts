import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-display-box',
  templateUrl: './display-box.component.html',
  styleUrls: ['./display-box.component.scss'],
})
export class DisplayBoxComponent implements OnInit, OnDestroy {
  historyDoc: string = '';
  historySub: Subscription;
  constructor(private displayService: DisplayService) {
    this.historySub = displayService.history$.subscribe((x: string[]) => {
      this.historyDoc = this.displayService.getHistoryText();
    });
  }
  ngOnDestroy(): void {
    this.historySub.unsubscribe();
  }

  ngOnInit(): void {}
}
