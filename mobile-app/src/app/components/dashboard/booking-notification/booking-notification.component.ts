import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-booking-notification',
  templateUrl: './booking-notification.component.html',
  styleUrls: ['./booking-notification.component.scss'],
})
export class BookingNotificationComponent implements OnInit {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {}
  modalOk() {
    this.modal.showModal = false;
  }
}
