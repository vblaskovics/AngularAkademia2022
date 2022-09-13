import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { trigger, transition, animate, style } from '@angular/animations';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-200%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(00%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-150%)' })),
      ]),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {}
}
