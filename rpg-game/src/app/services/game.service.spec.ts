import { Character } from '../models/character.model';
import { DisplayService } from './display.service';
import { GameService } from './game.service';
import { LoggerService } from '../services/logger.service';

describe('GameService', () => {
  let gameService: GameService;
  let loggerService: LoggerService;
  let displayService: DisplayService;

  beforeEach(() => {
    loggerService = new LoggerService();
    displayService = new DisplayService(loggerService);
    gameService = new GameService(loggerService, displayService);
  });

  describe('An attack event', () => {
    let c1: Character;
    let c2: Character;

    beforeEach(() => {
      c1 = { attack: 4, defense: 2, hp: 8, name: 'Hero' };
      c2 = { attack: 4, defense: 2, hp: 8, name: 'Orc' };
    });

    it("should deal 2 damage to a character if it's defense is lower than it's opponents attack", () => {
      gameService.attack(c1, c2);
      expect(c1.hp).withContext('Character1 hp should be lower by 2').toBe(6);
      expect(c2.hp).withContext('Character2 hp should be lower by 2').toBe(6);
    });
    it("should not deal damage to a character if it's defense is equal or higher than it's opponents attack", () => {
      c1.defense = 4;
      c2.defense = 5;
      gameService.attack(c1, c2);
      expect(c1.hp)
        .withContext('Character1 hp should remain unchanged')
        .toBe(8);
      expect(c2.hp)
        .withContext('Character2 hp should remain unchanged')
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
        '=== ATTACK ==='
      );
    });

    it('should display attack results', () => {
      spyOn(displayService, 'addHistoryEvent');
      c1.defense = 10;

      gameService.attack(c1, c2);

      expect(displayService.addHistoryEvent).toHaveBeenCalledWith(
        'Hero hit Orc (-2hp)'
      );
      expect(displayService.addHistoryEvent).toHaveBeenCalledWith(
        'Orc did not hurt Hero'
      );
    });
  });
});
