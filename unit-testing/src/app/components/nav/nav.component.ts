import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Input } from '@angular/core';
import { Accordion } from '../accordion/models/accordion';
import { AccordionDataService } from 'src/app/services/accordion-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService: LoginService, private accDataService: AccordionDataService) { }

  @Input() accordionList?: Accordion[];

  ngOnInit(): void {
    this.accordionList = this.accDataService.accordionList
  }

  logout(): void {
    this.authService.logout()
  }

}
