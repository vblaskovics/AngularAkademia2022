import { TestBed } from '@angular/core/testing';

import { AlreadyInGuard } from './already-in.guard';

describe('AlreadyInGuard', () => {
  let guard: AlreadyInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlreadyInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
