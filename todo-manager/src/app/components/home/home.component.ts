import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor() { }

  details: any;
  subtodoTitle: any;
  showSignInForm: boolean = false;


  passToDetails(event: any) {
    this.details = event;
  }

}
