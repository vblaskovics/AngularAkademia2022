import { Character } from "../interfaces/character";
import { GameService } from "./game.service"
import { HistoryService } from "./history.service";
import { LoggerService } from "./logger.service";

describe("GameService", () => {

    let loggerService: LoggerService;
    let gameService: GameService;
    let historyService: HistoryService;
    
    beforeEach(() => {
        loggerService = new LoggerService();
        historyService = new HistoryService(loggerService);
        gameService = new GameService(loggerService, historyService);
    })

    describe("An attack event", () => {

        it("should calculate the result of an attack", () => {
        
            let c1: Character = { attack: 4, defense: 2, hp: 8, name: "c1" };
            let c2: Character = { attack: 4, defense: 2, hp: 8, name: "c2" };
    
            gameService.attack(c1, c2);
    
            expect(c1.hp).withContext('Character1 hp should be lower by 2').toBe(6);
            expect(c2.hp).withContext('Character2 hp should be lower by 2').toBe(6);
        })
    
        it("should not deal damage to a character if it's defense is equal or higher than it's opponents attack", () => {

            let c1: Character = { attack: 4, defense: 4, hp: 8, name: "c1"};
            let c2: Character = { attack: 4, defense: 5, hp: 8, name: "c2"};
    
            gameService.attack(c1, c2);
    
            expect(c1.hp).withContext('Character1 hp should be 8').toBe(8);
            expect(c2.hp).withContext('Character2 hp should be 8').toBe(8);
        })

        it("should log by the logger", () => {
            spyOn(loggerService, 'logger');
            spyOn(historyService, 'addHistory')
            
            gameService.attack({attack: 0, defense: 0, hp: 0, name: "c1"}, {attack: 0, defense: 0, hp: 0, name: "c2"});
            expect(loggerService.logger).toHaveBeenCalledTimes(1);            
        })
    })

})