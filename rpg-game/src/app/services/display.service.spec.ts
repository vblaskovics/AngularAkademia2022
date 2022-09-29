import { DisplayService } from './display.service';
import { LoggerService } from './logger.service';

describe('DisplayService', () => {
  let displayService: DisplayService;
  let loggerService: LoggerService;
  beforeEach(() => {
    loggerService = new LoggerService();
    displayService = new DisplayService(loggerService);
  });

  describe('getHistoryText event', () => {
    it('should return a string containing every history item in a new row', () => {
      displayService.addHistoryEvent('event1');
      displayService.addHistoryEvent('event2');
      expect(displayService.getHistoryText())
        .withContext(
          'every item of history should be in a string in separated rows'
        )
        .toBe(`event1\nevent2`);
    });
  });
  describe('addHistoryEvent event', () => {
    it('should add a string to the history', () => {
      displayService.addHistoryEvent('event3');
      expect(displayService.history$.getValue().length).toBe(1);
    });
  });
  describe('log happened', () => {
    it('a log event happened in addHistoryEvent', () => {
      spyOn(loggerService, 'log');

      displayService.addHistoryEvent('log');
      expect(loggerService.log).toHaveBeenCalledTimes(1);
    });
  });
});
