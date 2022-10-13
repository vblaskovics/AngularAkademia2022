import { Component, Input, OnInit } from '@angular/core';
import { Accordion } from './models/accordion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() accordionList?: Accordion[];

  constructor() { }

  ngOnInit(): void {
  }

  toggleAccordion(id: string): void {
    this.accordionList?.find(acc => {
      acc.id === id ? acc.toggled = !acc.toggled : null
    })
  }

}
