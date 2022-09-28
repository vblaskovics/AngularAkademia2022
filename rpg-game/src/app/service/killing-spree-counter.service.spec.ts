import { TestBed } from '@angular/core/testing';
import { Character } from '../model/character';

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
  describe('setFighters', () => {
    it('should be set the fighters', () => {
      let c1: Character = { attack: 4, defense: 2, hp: 8, name: 'hero23' };
      let c2: Character = { attack: 4, defense: 2, hp: 8, name: 'ork43' };
      service.setFighters(c1.name, c2.name);
      expect(service.killingSpreeCounter[0].charName)
        .withContext('defaultKillingSpreeCounter[0].charName should be hero23')
        .toBe('hero23');
      expect(service.killingSpreeCounter[1].charName)
        .withContext('defaultKillingSpreeCounter[1].charName should be ork43')
        .toBe('ork43');
    });
  });
});
