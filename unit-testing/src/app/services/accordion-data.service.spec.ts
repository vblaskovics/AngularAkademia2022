import { TestBed } from '@angular/core/testing';

import { AccordionDataService } from './accordion-data.service';

describe('AccordionDataService', () => {
  let service: AccordionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccordionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
