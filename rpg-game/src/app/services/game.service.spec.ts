//viktoré:
import { Character } from "../models/character";
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

        let loggerServiceSpy = jasmine.createSpyObj('LoggerService', ['log']);
        let displayServiceSpy = jasmine.createSpyObj('DisplayService', ['addHistoryEvent']);
        let randomServiceSpy = jasmine.createSpyObj('RandomService', ['random']);
        randomServiceSpy.random.and.returnValue(1);

        TestBed.configureTestingModule({
            providers: [
                { provide: LoggerService, useValue: loggerServiceSpy },
                { provide: DisplayService, useValue: displayServiceSpy },
                { provide: RandomService, useValue: randomServiceSpy },
                // { provide: RandomService, useValue: { random: () => 1 } },
                GameService,
            ]
        });

        loggerService = TestBed.inject(LoggerService);
        displayService = TestBed.inject(DisplayService);
        gameService = TestBed.inject(GameService);
        randomService = TestBed.inject(RandomService);
    });

    describe("An attack event", () => {
        let c1: Character;
        let c2: Character;

        it("should be randomized by the RandomService", () => {
            c1 = { name: "Hero", attack: 3, defense: 5, hp: 8 };
            c2 = { name: "Orc", attack: 1, defense: 6, hp: 5 };
            gameService.attack(c1, c2);
            expect(randomService.random).toHaveBeenCalledTimes(3);
        });

        it("should deal 2 damage to a character if it's defense is lower than it's opponents attack", () => {
            c1 = { attack: 5, defense: 4, hp: 8, name: 'Hero' };
            c2 = { attack: 5, defense: 4, hp: 8, name: 'Orc' };
            gameService.attack(c1, c2);
            expect(c1.hp).withContext('Character1 hp should be lower by 2').toBe(6);
            expect(c2.hp).withContext('Character2 hp should be lower by 2').toBe(6);
        })
        it("should not deal damage to a character if it's defense is equal or higher than it's opponents attack", () => {
            c1 = { attack: 4, defense: 5, hp: 8, name: 'Hero' };
            c2 = { attack: 4, defense: 6, hp: 8, name: 'Orc' };
            gameService.attack(c1, c2);
            expect(c1.hp).withContext('Character1 hp should remain unchanged').toBe(8);
            expect(c2.hp).withContext('Character2 hp should remain unchanged').toBe(8);
        })
        it("should log by the logger", () => {
            c1 = { attack: 4, defense: 5, hp: 8, name: 'Hero' };
            c2 = { attack: 4, defense: 6, hp: 8, name: 'Orc' };

            gameService.attack(c1, c2);

            expect(loggerService.log).toHaveBeenCalledTimes(1);
            expect(gameService).toBeTruthy();
        })

        it("should display a starting message", () => {
            c1 = { attack: 4, defense: 5, hp: 8, name: 'Hero' };
            c2 = { attack: 4, defense: 6, hp: 8, name: 'Orc' };

            gameService.attack(c1, c2);

            expect(displayService.addHistoryEvent).toHaveBeenCalledWith('=== TÁMADÁS ===');
        })

        it("should display attack results", () => {
            c1 = { attack: 4, defense: 4, hp: 8, name: 'Hero' };
            c2 = { attack: 2, defense: 4, hp: 8, name: 'Orc' };

            gameService.attack(c1, c2);

            expect(displayService.addHistoryEvent).toHaveBeenCalledWith('Hero megsebezte Orc-t (-2 hp)');
            expect(displayService.addHistoryEvent).toHaveBeenCalledWith('Orc nem sebezte meg Hero-t');
        })

    })

})

//mockolva:
// import { Character } from './../models/character';
// import { DisplayService } from './display.service';
// import { GameService } from "./game.service";
// import { LoggerService } from "./logger.service";
// import { TestBed } from '@angular/core/testing'
// import { RandomService } from './random.service';


// describe("GameService", () => {

//     let gameService: GameService;
//     let loggerService: LoggerService;
//     let displayService: DisplayService;
//     let randomService: RandomService;

//     beforeEach(() => {
        
//         let loggerServiceSpy = jasmine.createSpyObj('LoggerService', ('log'));
//         let displayServiceSpy = jasmine.createSpyObj('DisplayService', ('addHistoryEvent'));
//         let randomServiceSpy = jasmine.createSpyObj('RandomService', ('onRandomPoint'));
//         // randomServiceSpy.random.and.returnValue(1);

//         TestBed.configureTestingModule({
//             providers: [
//                 { provide: LoggerService, useValue: loggerServiceSpy},
//                 { provide: DisplayService, useValue: displayServiceSpy},
//                 { provide: RandomService, useValue: randomServiceSpy},
//                 //{ provide: RandomService, useValue: { onRandomPoint: ()=> 1} }, //kimockolva a működés a useValue-ban.odaadtunk neki egy objektumot
//                 GameService
//                        ]
//         }     
//         );
//         loggerService = TestBed.inject(LoggerService);
//         displayService = TestBed.inject(DisplayService);
//         gameService = TestBed.inject(GameService);
//         randomService = TestBed.inject(RandomService);
//     });

//     describe("An attack event", () => {
//         let c1: Character;
//         let c2: Character;

//         beforeEach(() => {
//             c1 = { attack: 4, defense: 2, hp: 8, name: 'Hero' };
//             c2 = { attack: 4, defense: 2, hp: 8, name: 'Orc' };
//         })

//         it("should deal 2 damages to a character if it's defense is lower than it's opponents attack", () => {
//             gameService.attack(c1, c2);
//             expect(c1.hp).withContext('Character1 hp should be lower by 2').toBe(6);
//             expect(c2.hp).withContext('Character2 hp should be lower by 2').toBe(6);
//         })


//         it("should not deal damage to a character if it's defense is equal or higher than it's opponents attack", () => {
//             c1.defense = 4;
//             c2.defense = 5;
//             gameService.attack(c1, c2);
//             expect(c1.hp).withContext('Character1 hp should remain unchanged').toBe(8);
//             expect(c2.hp).withContext('Character2 hp should remain unchanged').toBe(8);
//         })


//         it("should log by the logger", () => {
//             //csak kimockoltuk a logger és display service-t

//             gameService.attack(c1, c2);

//             expect(loggerService.log).toHaveBeenCalledTimes(1); //azért lett csak egyszer meghívva, mert egyszer hívódik meg
//             expect(gameService).toBeTruthy();
//         })


//         it("should display a starting message", () => {
//             spyOn(displayService, 'addHistoryEvent');

//             gameService.attack(c1, c2);

//             expect(displayService.addHistoryEvent).toHaveBeenCalledWith('=== TÁMADÁS ===');
//         })

//         it("should display attack results", () => {
//             spyOn(displayService, 'addHistoryEvent');
//             c1.defense = 10;

//             gameService.attack(c1, c2);

//             expect(displayService.addHistoryEvent).toHaveBeenCalledWith('Hero megsebezte Orc-t (-2 hp)');
//             expect(displayService.addHistoryEvent).toHaveBeenCalledWith('Orc nem sebezte meg Hero-t');
//         })

//         it("should display randomized number of attacks", () => {
//             spyOn(displayService, 'addHistoryEvent');
//             c1.defense = 10;

//             gameService.attack(c1, c2);

//             expect(displayService.addHistoryEvent).toHaveBeenCalledWith('Hero megsebezte Orc-t (-2 hp)');
//             expect(displayService.addHistoryEvent).toHaveBeenCalledWith('Orc nem sebezte meg Hero-t');
//         })

//     })


// })



//mockolás előtt:
// import { Character } from './../models/character';
// import { DisplayService } from './display.service';
// import { GameService } from "./game.service";
// import { LoggerService } from "./logger.service";

// describe("GameService", () => {

//     let gameService: GameService;
//     let loggerService: LoggerService;
//     let displayService: DisplayService;

//     beforeEach(() => {
//         loggerService = new LoggerService();
//         displayService = new DisplayService(loggerService);
//         gameService = new GameService(loggerService, displayService);
//     });

//     describe("An attack event", () => {
//         let c1: Character;
//         let c2: Character;

//         beforeEach(() => {
//             c1 = { attack: 4, defense: 2, hp: 8, name: 'Hero' };
//             c2 = { attack: 4, defense: 2, hp: 8, name: 'Orc' };
//         })

//         it("should deal 2 damages to a character if it's defense is lower than it's opponents attack", () => {
//             gameService.attack(c1, c2);
//             expect(c1.hp).withContext('Character1 hp should be lower by 2').toBe(6);
//             expect(c2.hp).withContext('Character2 hp should be lower by 2').toBe(6);
//         })


//         it("should not deal damage to a character if it's defense is equal or higher than it's opponents attack", () => {
//             c1.defense = 4;
//             c2.defense = 5;
//             gameService.attack(c1, c2);
//             expect(c1.hp).withContext('Character1 hp should remain unchanged').toBe(8);
//             expect(c2.hp).withContext('Character2 hp should remain unchanged').toBe(8);
//         })


//         it("should log by the logger", () => {
//             spyOn(loggerService, 'log');
//             spyOn(displayService, 'addHistoryEvent'); //csak kimockoltuk a logger és display service-t

//             gameService.attack(c1, c2);

//             expect(loggerService.log).toHaveBeenCalledTimes(1); //azért lett csak egyszer meghívva, mert egyszer hívódik meg
//             expect(gameService).toBeTruthy();
//         })


//         it("should display a starting message", () => {
//             spyOn(displayService, 'addHistoryEvent');

//             gameService.attack(c1, c2);

//             expect(displayService.addHistoryEvent).toHaveBeenCalledWith('=== TÁMADÁS ===');
//         })

//         it("should display attack results", () => {
//             spyOn(displayService, 'addHistoryEvent');
//             c1.defense = 10;

//             gameService.attack(c1, c2);

//             expect(displayService.addHistoryEvent).toHaveBeenCalledWith('Hero megsebezte Orc-t (-2 hp)');
//             expect(displayService.addHistoryEvent).toHaveBeenCalledWith('Orc nem sebezte meg Hero-t');
//         })

//     })


// })



