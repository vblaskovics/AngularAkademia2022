import { TestBed } from '@angular/core/testing';
import { Character } from '../interfaces/character';
import { DisplayService } from './display.service';
import { GameService } from './game.service';
import { LoggerService } from './logger.service';
import { RandomService } from './random.service';

describe('GameService', () => {
  let gameService: GameService;
  let loggerService: LoggerService;
  let displayService: DisplayService;
  let randomService: RandomService;
  beforeEach(() => {
    /* loggerService = new LoggerService();
    displayService = new DisplayService(loggerService);
    gameService = new GameService(loggerService, displayService); */
    let loggerServiceSpy = jasmine.createSpyObj('LoggerService', ['log']);
    let displayServiceSpy = jasmine.createSpyObj('DisplayService', [
      'addHistoryEvent',
    ]);
    let randomServiceSpy = jasmine.createSpyObj('RandomService', ['random']);
    randomServiceSpy.random.and.returnValue(1);
    /* let randomMock = {
      random() {
        return 1;
      },
    }; */

    TestBed.configureTestingModule({
      providers: [
        { provide: LoggerService, useValue: loggerServiceSpy },
        { provide: DisplayService, useValue: displayServiceSpy },
        { provide: RandomService, useValue: randomServiceSpy },
        GameService,
      ],
    });
    loggerService = TestBed.inject(LoggerService);
    displayService = TestBed.inject(DisplayService);
    gameService = TestBed.inject(GameService);
    randomService = TestBed.inject(RandomService);
  });
  describe('an attack event', () => {
    it('should calculate the result of an attack if its higher than enemys defense', () => {
      let c1: Character = {
        attack: 4,
        defense: 2,
        hp: 8,
        name: 'Hero',
        avatar: 'asd',
        id: 1,
      };
      let c2: Character = {
        attack: 4,
        defense: 2,
        hp: 8,
        name: 'Ork',
        avatar: 'asd',
        id: 2,
      };

      gameService.attack(c1, c2);
      expect(c1.hp).withContext('ch1 hp should be lower by2').toBe(6);
      expect(c2.hp).withContext('ch2 hp should be lower by2').toBe(6);
    });
    it('should testthe isLosingHelath', () => {
      let baseHp = 5;
      let currentHp = 3;
      let isLosingHealthResult = gameService.isLosingHealth(baseHp, currentHp);
      expect(isLosingHealthResult).toBe(true);
    });
    it('should calculate the result of an attack if def equals or higher than an enemys attack', () => {
      let c1: Character = {
        attack: 3,
        defense: 4,
        hp: 8,
        name: 'Hero',
        avatar: 'asd',
        id: 1,
      };
      let c2: Character = {
        attack: 4,
        defense: 4,
        hp: 8,
        name: 'Ork',
        avatar: 'asd',
        id: 1,
      };
      c1.attack = c1.attack;
      c2.attack = c2.attack;
      gameService.attack(c1, c2);
      expect(c2.hp)
        .withContext('ch2 hp should be the same as before the attack')
        .toBe(8);
    });
    it('random was called', () => {
      gameService.attack(
        { attack: 1, defense: 1, hp: 1, name: 'c1', avatar: 'asd', id: 1 },
        { attack: 1, defense: 1, hp: 1, name: 'c2', avatar: 'asd', id: 1 }
      );
      expect(randomService.random).toHaveBeenCalledTimes(2);
    });
    it('should log by the logger', () => {
      gameService.attack(
        { attack: 1, defense: 1, hp: 1, name: 'c1', avatar: 'asd', id: 1 },
        { attack: 1, defense: 1, hp: 1, name: 'c2', avatar: 'asd', id: 1 }
      );
      expect(loggerService.log).toHaveBeenCalledTimes(1);
    });
    it('should write to display serivce', () => {
      gameService.attack(
        { attack: 1, defense: 1, hp: 1, name: 'c1', avatar: 'asd', id: 1 },
        { attack: 1, defense: 1, hp: 1, name: 'c2', avatar: 'asd', id: 1 }
      );
      expect(displayService.addHistoryEvent).toHaveBeenCalledTimes(3);
    });
  });
});
