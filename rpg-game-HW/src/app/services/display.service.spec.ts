import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';
import { DisplayService } from './display.service';

describe('DisplayService', () => {
    let displayService: DisplayService;
    let loggerService: LoggerService;
  
    beforeEach(() => {
        
        loggerService = new LoggerService();
        displayService = new DisplayService(loggerService);


    });

  
    it('should be able to return the history as a text', () => {
      displayService.history = ['elso event', 'masodik event', 'harmadik event'];
      
      const res: string = displayService.getHistoryText();
      
      expect(res).toBe(`elso event\nmasodik event\nharmadik event`);
    });

    
    it('should recieve and store history events', () => {
      displayService.history = [];
  
      displayService.addHistoryEvent('history event');
  
      const res: string = displayService.getHistoryText();
      expect(res).toBe('history event');
    });

  
    it('should log when add history event', () => {
      spyOn(loggerService, 'log');
  
      displayService.addHistoryEvent('history event');
  
      expect(loggerService.log).toHaveBeenCalledTimes(1);
    })

    //toEqual - objektumot és listát vizsgál, toBe - t csak értékre lehet használni
  });



  //mockolás előtt:
//   import { LoggerService } from './logger.service';
// import { DisplayService } from './display.service';

// describe('DisplayService', () => {
//     let displayService: DisplayService;
//     let loggerService: LoggerService;
  
//     beforeEach(() => {
//       loggerService = new LoggerService();
//       displayService = new DisplayService(loggerService);
//     });

  
//     it('should be able to return the history as a text', () => {
//       displayService.history = ['elso event', 'masodik event', 'harmadik event'];
      
//       const res: string = displayService.getHistoryText();
      
//       expect(res).toBe(`elso event\nmasodik event\nharmadik event`);
//     });

    
//     it('should recieve and store history events', () => {
//       displayService.history = [];
  
//       displayService.addHistoryEvent('history event');
  
//       const res: string = displayService.getHistoryText();
//       expect(res).toBe('history event');
//     });
    
  
//     it('should log when add history event', () => {
//       spyOn(loggerService, 'log');
  
//       displayService.addHistoryEvent('history event');
  
//       expect(loggerService.log).toHaveBeenCalledTimes(1);
//     })

//     //toEqual - objektumot és listát vizsgál, toBe - t csak értékre lehet használni
//   });