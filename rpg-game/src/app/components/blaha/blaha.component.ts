import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { AppService } from 'src/app/services/app.service';
import { HEROES } from 'src/app/mock-data/mock-heroes';

@Component({
  selector: 'app-blaha',
  templateUrl: './blaha.component.html',
  styleUrls: ['./blaha.component.css']
})
export class BlahaComponent implements OnInit {
  heroes = HEROES;


  constructor(private appService: AppService) {
   }

  ngOnInit() {
  }

}
