import { TestBed } from '@angular/core/testing';

import { HttpMockService } from './http-mock.service';

describe('HttpMockService', () => {
  let service: HttpMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
