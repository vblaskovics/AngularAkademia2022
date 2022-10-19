import { TestBed } from '@angular/core/testing';
import { DisplayService } from './display.service';
import { LoggerService } from './logger.service';

describe('DisplayService', () => {
  let displayService: DisplayService;
  let loggerService: LoggerService;

  beforeEach(() => {
    // loggerService = new LoggerService();
    // displayService = new DisplayService(loggerService)

    let loggerServiceSpy = jasmine.createSpyObj('', []);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: LoggerService,
          useValue: loggerServiceSpy,
          DisplayService,
        },
      ],
    });

    loggerService = TestBed.inject(LoggerService)
    displayService = TestBed.inject(DisplayService)
  });

  it('should be able to return the history as a text', () => {
    displayService.history = ['elso event', 'masodik event', 'harmadik event'];

    const res: string = displayService.getHistoryText();

    expect(res).toBe(`elso event\nmasodik event\nharmadik event`);
  });

  it('should recieve and tore history events', () => {
    displayService.history = [];

    displayService.addHistoryEvent('');

    const res: string = displayService.getHistoryText();
    expect(res).toBe('history event');
  });

  it('should log when add history event', () => {
    spyOn(loggerService, 'log');

    displayService.addHistoryEvent('history event');

    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });
});
