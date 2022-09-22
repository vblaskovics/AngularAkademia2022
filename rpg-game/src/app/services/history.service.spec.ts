import { GameService } from './game.service';
import { HistoryService } from './history.service';
import { Character } from "../interfaces/character";
import { LoggerService } from './logger.service';

describe('HistoryService', () => {

  let historyService: HistoryService;
  let gameService: GameService;
  let loggerService: LoggerService;
  
  beforeEach(() => {
    loggerService = new LoggerService()
    historyService = new HistoryService(loggerService);
    gameService = new GameService(loggerService, historyService )
  })

  describe("HistoryService", () => {
    it("Prints to console all event history", () => {

      historyService.history = ['New history event', 'New history2 event']
      
      expect(historyService.getHistoryText(historyService.history))
        .withContext("events should be console logged")
        .toBe(`New history event\nNew history2 event`)
    })

    it("should add an event to history", () => {
      spyOn(loggerService, 'logger')
      let newHistory = 'New history event'
      historyService.addHistory(newHistory)
      expect(historyService.history.length).withContext("The length of history should be 1").toBe(1);
      expect(loggerService.logger).toHaveBeenCalledTimes(4)
    })

    it("should use addHistory function", () => {
      let c1: Character = { attack: 4, defense: 5, hp: 8, name: "c1" };
      let c2: Character = { attack: 4, defense: 2, hp: 8, name: "c2" };
      spyOn(historyService, 'addHistory');
      gameService.attack(c1, c2)
      expect(historyService.addHistory).toHaveBeenCalledWith(`===TÁMADÁS===\nc1 megsebezte c2-ot(-2hp)\nc2 nem sebezte meg c1-t`)
    })
  })

});
