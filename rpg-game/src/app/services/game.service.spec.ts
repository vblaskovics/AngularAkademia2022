import { Character } from "../interfaces/character";
import { GameService } from "./game.service"
import { LoggerService } from "./logger.service";

describe("GameService", () => {

    let gameService: GameService
    let loggerService: LoggerService

    beforeEach(() => {
        loggerService = new LoggerService();
        gameService = new GameService(loggerService);
    });

    describe("An attack event", () => {

        it("should deal 2 damage to a character if it's defense is lower than it's opponents attack", () => {
            let c1: Character = { attack: 4, defense: 2, hp: 8 };
            let c2: Character = { attack: 4, defense: 2, hp: 8 };
            gameService.attack(c1, c2);
            expect(c1.hp).withContext('Character1 hp should be lower by 2').toBe(6);
            expect(c2.hp).withContext('Character2 hp should be lower by 2').toBe(6);

        })
        it("should not deal damage to a character if it's defense is equal or higher than it's opponents attack", () => {
            let c1: Character = { attack: 4, defense: 4, hp: 8 };
            let c2: Character = { attack: 4, defense: 5, hp: 8 };
            gameService.attack(c1, c2);
            expect(c1.hp).withContext('Character1 hp should remain unchanged').toBe(8);
            expect(c2.hp).withContext('Character2 hp should remain unchanged').toBe(8);
        })

    })




})