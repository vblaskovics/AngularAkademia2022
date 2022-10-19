import { LoggerService } from './logger.service';
import { Character } from '../models/character';
import { GameService } from './game.service';
import { DisplayService } from './display.service';
import { TestBed } from '@angular/core/testing';
import { RandomService } from './random.service';


describe("GameService", () => {

  let loggerService: LoggerService;
  let gameService: GameService;
  let displayService: DisplayService;
  // let randomService: RandomService;

  beforeEach(() => {
    // loggerService = new LoggerService();
    // displayService = new DisplayService(loggerService);
    // gameService = new GameService(loggerService, displayService);

    //létrehozunk egy mock osztályt. Teljes objektum, de nincs belső működése (spy-nak nincs logikája, nem várunk visszatérési értéket)
    let loggerServiceSpy = jasmine.createSpyObj('LoggerService', ['log']);
    let displayServiceSpy = jasmine.createSpyObj('DisplayService', ['addHistoryEvent']);
    // spy-t is adok rá és az értéket beállítom, így tudom azt is tesztelni, hogy lefut-e:
    let randomServiceSpy = jasmine.createSpyObj('RandomService', ['randomNumber']);
    randomServiceSpy.randomNumber.and.returnValue(0);


    // nem nekünk kell példányosítani, beállítjuk a modult:
    // TestBed.configureTestingModule({
    //   providers: [LoggerService, DisplayService, GameService]
    // });
    // már bejöhet a dep. inj.:
    TestBed.configureTestingModule({
      providers: [
        { provide: LoggerService, useValue: loggerServiceSpy },
        { provide: DisplayService, useValue: displayServiceSpy },
        { provide: RandomService, useValue: randomServiceSpy },
        // { provide: RandomService, useValue: { randomNumber: () => 0 } },
        GameService]
    });
    // elkérjük a példányokat:
    loggerService = TestBed.inject(LoggerService);
    displayService = TestBed.inject(DisplayService);
    // randomService = TestBed.inject(RandomService);
    gameService = TestBed.inject(GameService);
  });

  describe("event of attack", () => {

    it("should calculate the result of an attack", () => {

      // const loggerService: LoggerService = new LoggerService();
      // const gameService: GameService = new GameService(loggerService);

      let c1: Character = { attack: 4, defense: 2, hp: 8, name: 'Hero'};
      let c2: Character = { attack: 4, defense: 2, hp: 8, name: 'Ork'};

      gameService.attack(c1, c2);

      expect(c1.hp).withContext('Character1 hp should be lower by 2.').toBe(6);
      expect(c2.hp).withContext('Character2 hp should be lower by 2.').toBe(6);

    })

    it("in case of equal forces, nothing should happen", () => {

      // const gameService: GameService = new GameService();

      let c1: Character = { attack: 4, defense: 4, hp: 8, name: 'Hero'};
      let c2: Character = { attack: 4, defense: 4, hp: 8, name: 'Ork'};

      gameService.attack(c1, c2);

      expect(c1.hp).withContext('Character1 hp should remain the same').toBe(8);
      expect(c2.hp).withContext('Character2 hp should remain the same').toBe(8);

    })

    it("should log by the logger", () => {
      //mockolás: nem fut le, de tudom spy-olni, hogy mi lenne, ha...
      // spyOn(loggerService, 'log'); // már nem kell, mert fent már hívtunk rá spy-t
      // spyOn(displayService, 'addHistoryEvent'); // ezt azért hívom meg, hogy ne hívja meg többször a másikat, félrevezető
      // ha nem fontos, hogy mi az értéke, nem muszáj kiemelni:
      gameService.attack({attack: 4, defense: 5, hp: 6, name: ''}, {attack: 7, defense: 3, hp: 8, name: ''});

      // expect(loggerService.log).toHaveBeenCalledTimes(4); - már nem 4, mert a displayService is mockolva van, már csak spy-olja
      expect(loggerService.log).toHaveBeenCalledTimes(1);

    })

    it("should create events", () => {

      // spyOn(displayService, 'addHistoryEvent');

      gameService.attack({attack: 4, defense: 5, hp: 6, name: ''}, {attack: 7, defense: 3, hp: 8, name: ''});

      expect(displayService.addHistoryEvent).toHaveBeenCalledTimes(3);

    })

    it("should warn if not enough characters selected", () => {

      let c1: Character = { attack: 4, defense: 4, hp: 8, name: 'Hero'};
      let c2: Character = { attack: 4, defense: 4, hp: 8, name: 'Hero'};

      gameService.attack(c1, c2);

      expect(displayService.getHistoryText).withContext("warning").toBe('Válassz két karaktert!');

    })

  })

})
