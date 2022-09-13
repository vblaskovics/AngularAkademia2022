import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-caursel',
  templateUrl: './caursel.component.html',
  styleUrls: ['./caursel.component.scss']
})
export class CaurselComponent implements OnInit {

  @ViewChild('carousel', {static : true}) carousel?: NgbCarousel;

  images = [
    {
      imgUrl: '../../../../assets/carousel-img1.png'
    },
    {
      imgUrl: '../../../../assets/carousel-img2.png'
    },
    {
      imgUrl: '../../../../assets/carousel-img3.png'
    },
    {
      imgUrl: '../../../../assets/carousel-img4.png'
    },
  ]

  constructor() {
    this.carousel?.pause
  }

  ngOnInit(): void {
  }

}
