import { TestBed } from '@angular/core/testing';
import { DisplayService } from './display.service';
import { Character } from './../models/Character';
import { GameService } from './game.service';
import { LoggerService } from './logger.service';
import { RandomService } from './random.service';

describe('GameService', () => {
  let loggerService: LoggerService;
  let gameService: GameService;
  let displayService: DisplayService;

  beforeEach(() => {
    // loggerService = new LoggerService();
    // displayService = new DisplayService(loggerService);
    // gameService = new GameService(loggerService, displayService);

    let loggerServiceSpy = jasmine.createSpyObj('LoggerService', ['log']);
    let displayServiceSpy = jasmine.createSpyObj('DisplayService', ['addHistoryText']);
    let randomServiceSpy = jasmine.createSpyObj('RandomService', ['random']);
    randomServiceSpy.random.and.returnValue(1);

    TestBed.configureTestingModule({
      providers: [

          {provide: LoggerService,
          useValue: loggerServiceSpy},
          {provide: DisplayService, useValue: displayServiceSpy},
          {provide: RandomService, useValue: randomServiceSpy},
      ],
    });

    loggerService = TestBed.inject(LoggerService);
    displayService = TestBed.inject(DisplayService);
    gameService = TestBed.inject(GameService);
  });

  describe('An attack event', () => {
    let c1: Character;
    let c2: Character;

    beforeEach(() => {
      c1 = { attack: 4, defense: 2, health: 8, name: 'Hero' };
      c2 = { attack: 4, defense: 2, health: 8, name: 'Orc' };
    });

    it("should deal 2 damage to a character if it's defense is lower than it's opponents attack", () => {
      gameService.attack(c1, c2);
      expect(c1.health)
        .withContext('Character1 health should be lower by 2')
        .toBe(6);
      expect(c2.health)
        .withContext('Character2 health should be lower by 2')
        .toBe(6);
    });
    it("should not deal damage to a character if it's defense is equal or higher than it's opponents attack", () => {
      c1.defense = 4;
      c2.defense = 5;
      gameService.attack(c1, c2);
      expect(c1.health)
        .withContext('Character1 health should remain unchanged')
        .toBe(8);
      expect(c2.health)
        .withContext('Character2 health should remain unchanged')
        .toBe(8);
    });

    it('should log by the logger', () => {
      spyOn(loggerService, 'log');
      spyOn(displayService, 'addHistoryEvent');

      gameService.attack(c1, c2);

      expect(loggerService.log).toHaveBeenCalledTimes(1);
      expect(gameService).toBeTruthy();
    });

    it('should display a starting message', () => {
      spyOn(displayService, 'addHistoryEvent');

      gameService.attack(c1, c2);

      expect(displayService.addHistoryEvent).toHaveBeenCalledWith(
        '=== TÁMADÁS ==='
      );
    });

    it('should display attack results', () => {
      spyOn(displayService, 'addHistoryEvent');
      c1.defense = 10;

      gameService.attack(c1, c2);

      expect(displayService.addHistoryEvent).toHaveBeenCalledWith(
        'Hero megsebezte Orc-t (-2 health)'
      );
      expect(displayService.addHistoryEvent).toHaveBeenCalledWith(
        'Orc nem sebezte meg Hero-t'
      );
    });
  });
});
