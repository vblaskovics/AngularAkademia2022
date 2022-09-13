import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cardImages = [
    {
      cardImgUrl: '../../../../assets/card-img1.png',
      cardTitle: 'Vein, Austria',
      cardDescription: '12. 10-22. 10.2022',
      cardImgUrl2: '../../../../assets/card-img2.png',
      cardTitle2: 'Vein, Austria',
      cardDescription2: '12. 10-22. 10.2022',
    },
    {
      cardImgUrl: '../../../../assets/card-img3.png',
      cardTitle: 'Vein, Austria',
      cardDescription: '12. 10-22. 10.2022',
      cardImgUrl2: '../../../../assets/card-img4.png',
      cardTitle2: 'Vein, Austria',
      cardDescription2: '12. 10-22. 10.2022',
    },
  ];

  constructor(public modal: ModalService) {}

  ngOnInit(): void {}

  bookingService(){
    this.modal.showModal = true;

    setTimeout(() => {
      this.modal.showModal = false;
    }, 5000);

  }
}
