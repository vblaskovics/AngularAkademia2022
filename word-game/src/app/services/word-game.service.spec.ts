import { TestBed } from '@angular/core/testing';

import { WordGameService } from './word-game.service';

describe('WordGameService', () => {
  let service: WordGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
