import { DisplayService } from "./display.service"
import { LoggerService } from "./logger.service";


describe("DisplayService", () => {

  let displayService: DisplayService;
  let loggerService: LoggerService;

  beforeEach(() => {
    loggerService = new LoggerService();
    displayService = new DisplayService(loggerService);
  });

  describe("display of history", () => {

    it("should display the complete history as text, events are separated", () => {

      displayService.history = ['abcd', 'efgh'];

      const res: string = displayService.getHistoryText();

      expect(res).withContext('').toBe('abcd\nefgh');

    }),

    it("should add a new event to the history", () => {

      displayService.history = [];

      displayService.addHistoryEvent('ijkl');

      const res: string = displayService.getHistoryText();

      expect(res).withContext('').toBe('ijkl');

    })

    it("should log by the logger", () => {

      spyOn(loggerService, 'log');
      // ha nem fontos, hogy mi az értéke, nem muszáj kiemelni:
      displayService.getHistoryText();

      expect(loggerService.log).toHaveBeenCalledTimes(1);

    })



  })

})
