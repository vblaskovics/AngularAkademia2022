import { TestBed } from '@angular/core/testing';
import { Character } from '../model/character';
import { DisplayService } from './display.service';
import { GameService } from './game.service';
import { LoggerService } from './logger.service';
import { RandomService } from './random.service';

describe('GameService', () => {
  let loggerService: LoggerService;
  let gameService: GameService;
  let displayService: DisplayService;

  beforeEach(() => {
    /*     loggerService = new LoggerService();
    displayService = new DisplayService();
    gameService = new GameService(loggerService, displayService); */

    let LoggerServiceSpy = jasmine.createSpyObj('LoggerService', ['log']);
    let DisplayServiceSpy = jasmine.createSpyObj('DisplayService', [
      'logAttackStart',
      'addHistoryEvent',
      'getHistoryText',
    ]);
    let randomServiceSpy = jasmine.createSpyObj('RandomService', ['random']);
    randomServiceSpy.random.and.returnValue(1);

    TestBed.configureTestingModule({
      providers: [
        { provide: LoggerService, useValue: LoggerServiceSpy },
        { provide: DisplayService, useValue: DisplayServiceSpy },
        { provide: RandomService, useValue: randomServiceSpy },
        /* { provide: RandomService, useValue: { random: () => 1 } }, */
      ],
    });

    loggerService = TestBed.inject(LoggerService);
    displayService = TestBed.inject(DisplayService);
    gameService = TestBed.inject(GameService);
  });
  describe('An attack event', () => {
/*     it("should deal 2 demage of a character if it's defense is lower than it's opponents attack", () => {
        let c1: Character = { attack: 4, defense: 2, hp: 8, name: 'hero23' };
        let c2: Character = { attack: 4, defense: 2, hp: 8, name: 'ork43' };

      gameService.fight(c1, c2);

      expect(c1.hp).withContext('Character1 hp should be lower by 2').toBe(6);
      expect(c2.hp).withContext('Character1 hp should be lower by 2').toBe(6);
    });

    it("should not deal demage to a character if it's defense is equal or higher than it's opponents attack", () => {
      let c1: Character = { attack: 4, defense: 8, hp: 8, name: 'hero4' };
      let c2: Character = { attack: 8, defense: 4, hp: 8, name: 'ork' };

      gameService.fight(c1, c2);

      expect(c1.hp).withContext('Character1 hp should be 8').toBe(6);
      expect(c2.hp).withContext('Character1 hp should be 8').toBe(6);
    }); */

    it('should log TÁMADÁS by the DisplayService', () => {
      /* spyOn(displayService, 'logAttackStart'); */
      gameService.fight(
        { attack: 0, defense: 0, hp: 0, name: 'hero' },
        { attack: 0, defense: 0, hp: 0, name: 'ork' }
      );
      // akkor tudom meghívni ha volt rajta spy
      expect(displayService.logAttackStart).toHaveBeenCalledTimes(1);
    });

    /* it('should log winner and loser', () => {
      spyOn(displayService, 'logWinnerAndLoser');
      gameService.attack(
        { attack: 0, defense: 0, hp: 0, name: 'hero' },
        { attack: 0, defense: 0, hp: 0, name: 'ork' }
      );
      expect(displayService.logWinnerAndLoser).toHaveBeenCalledTimes(1);
    }); */
  });
});
