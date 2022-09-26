import { TestBed } from '@angular/core/testing';

import { KillingSpreeCounterService } from './killing-spree-counter.service';

describe('KillingSpreeCounterService', () => {
  let service: KillingSpreeCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KillingSpreeCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
