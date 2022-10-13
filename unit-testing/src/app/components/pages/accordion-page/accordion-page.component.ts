import { Component, OnInit, Output } from '@angular/core';
import { AccordionDataService } from 'src/app/services/accordion-data.service';
import { Accordion } from '../../accordion/models/accordion';

@Component({
  selector: 'app-accordion-page',
  templateUrl: './accordion-page.component.html',
  styleUrls: ['./accordion-page.component.scss']
})
export class AccordionPageComponent implements OnInit {

  @Output() accordionList?: Accordion[]

  constructor(private accDataService: AccordionDataService) { }

  ngOnInit(): void {
    this.accordionList = this.accDataService.accordionList
  }

}
