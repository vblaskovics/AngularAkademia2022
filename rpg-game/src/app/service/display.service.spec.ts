import { DisplayService } from './display.service';

describe('DisplayService', () => {
  let displayService: DisplayService;

  beforeEach(() => {
    displayService = new DisplayService();
  });

  describe('Get history text', () => {
    it('should return with strings from history array with enter after each string', () => {
      expect(displayService.getHistoryText())
        .withContext(
          'getHistoryText is history array strings, each in new line'
        )
        .toBe(displayService.history.join('\n'));
    });

    it('should return with boolean: addHistoryEvent add new line with getHistoryText function or not', () => {
      displayService.history = [];
      let stringToAdd = 'New Attack';
      displayService.addHistoryEvent(stringToAdd);
      expect(displayService.getHistoryText()).toBe('New Attack');
    });

/*     it('should log winner and loser', () => {
      spyOn(displayService, 'logWinnerAndLoser');
      displayService.logWinnerAndLoser(
        { attack: 4, defense: 8, hp: 8, name: 'WIZARD' },
        { attack: 4, defense: 8, hp: 8, name: 'UNICORN' }
      );
      expect(displayService.logWinnerAndLoser).toHaveBeenCalledTimes(1);
    }); */
  });
});
