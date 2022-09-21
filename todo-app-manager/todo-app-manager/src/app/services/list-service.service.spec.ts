import { TestBed } from '@angular/core/testing';

import { ListServiceService } from './list-service.service';

describe('ListServiceService', () => {
  let service: ListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
