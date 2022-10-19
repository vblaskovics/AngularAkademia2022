import { Character } from "../interfaces/character";
import { DisplayService } from "./display.service";
import { GameService } from "./game.service"
import { LoggerService } from "./logger.service";
import { TestBed } from '@angular/core/testing';
import { RandomService } from "./random.service";

describe("GameService", () => {

  let gameService: GameService;
  let loggerService: LoggerService;
  let displayService: DisplayService;
  let randomService: RandomService;

  beforeEach(() => {
      /* loggerService = new LoggerService();
      displayService = new DisplayService(loggerService);
      gameService = new GameService(loggerService, displayService); */

      let loggerServiceSpy = jasmine.createSpyObj('LoggerService', ['log']);
      let displayServiceSpy = jasmine.createSpyObj('DisplayService', ['addHistoryEvent']);
      let randomServiceSpy = jasmine.createSpyObj('RandomService', ['random']);
      randomServiceSpy.random.and.returnValue(1);

      TestBed.configureTestingModule({
        providers: [
          { provide: LoggerService, useValue: loggerServiceSpy },
          { provide: DisplayService, useValue: displayServiceSpy},
          { provide: RandomService, useValue: randomServiceSpy },
          GameService,
        ]
      });

      loggerService = TestBed.inject(LoggerService);
      displayService = TestBed.inject(DisplayService);
      gameService = TestBed.inject(GameService);
      randomService = TestBed.inject(RandomService);
  });

  describe("An attack event", () => {
    let char1: Character;
    let char2: Character;

    it("should be randomized by the RandomService", () => {
      char1 = { name: "MR X", attack: 3, defense: 3, hp: 8 };
      char2 = { name: "MR Y", attack: 3, defense: 3, hp: 5 };
      gameService.attack(char1, char2);
      expect(randomService.random).toHaveBeenCalledTimes(2);
    });

    it("should deal 2 damage to a character if it's defense is lower than it's opponents attack", () => {
      char1 = { name: 'MR X', attack: 4, defense: 4, hp: 8 };
      char2 = { name: 'MR Y', attack: 4, defense: 4, hp: 8 };
      gameService.attack(char1, char2);
      expect(char1.hp).withContext('Character1 hp should be lower by 2').toBe(6);
      expect(char2.hp).withContext('Character2 hp should be lower by 2').toBe(6);
    });

    it("should not deal damage to a character if it's defense is equal or higher than it's opponents attack", () => {
      char1 = { name: 'MR X', attack: 4, defense: 5, hp: 8 };
      char2 = { name: 'MR Y', attack: 4, defense: 6, hp: 8 };
      gameService.attack(char1, char2);
      expect(char1.hp).withContext('Character1 hp should remain unchanged').toBe(8);
      expect(char2.hp).withContext('Character2 hp should remain unchanged').toBe(8);
    });

    it("should log by the logger", () => {

      char1 = { name: 'MR X', attack: 4, defense: 5, hp: 8 };
      char2 = { name: 'MR X', attack: 4, defense: 6, hp: 8 };

      gameService.attack(char1, char2);

      expect(loggerService.log).toHaveBeenCalledTimes(1);
      expect(gameService).toBeTruthy();
    });

    it("should display a starting message", () => {
      char1 = { name: 'MR X', attack: 4, defense: 5, hp: 8 };
      char2 = { name: 'MR X', attack: 4, defense: 6, hp: 8 };

      gameService.attack(char1, char2);

      expect(displayService.addHistoryEvent).toHaveBeenCalledWith('=== TÁMADÁS ===');
    });

    it("should display attack results", () => {
      char1 = { attack: 4, defense: 4, hp: 8, name: 'MR X' };
      char2 = { attack: 2, defense: 4, hp: 8, name: 'MR Y' };

        gameService.attack(char1, char2);

        expect(displayService.addHistoryEvent).toHaveBeenCalledWith('MR X megsebezte MR Y-t (-2HP)');
        expect(displayService.addHistoryEvent).toHaveBeenCalledWith('MR Y nem sebezte meg MR X-t');
    });

  })

})
