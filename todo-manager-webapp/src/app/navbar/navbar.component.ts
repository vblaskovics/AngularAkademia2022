import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input () title !:string
  @Input () counter !: number

  constructor() { }

  ngOnInit(): void {
  }

  onCreate(formValue: any): void {
    console.log('form value', formValue)

  }
}
