import { Injectable } from '@angular/core';
import { Character } from '../model/character.interface';
import { DisplayService } from './display.service';
import { LoggerService } from './logger.service';
import { RandomService } from './random.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  characterOneKillingSpreeCounter = 0;
  characterTwoKillingSpreeCounter = 0;

  constructor(
    private logger: LoggerService,
    private randomService: RandomService,
    private displayService: DisplayService
  ) {}

  attack(characterOne: Character, characterTwo: Character) {
    this.attackFromTo(characterOne, characterTwo);
    //this.attackFromTo(characterTwo, characterOne);
  }

  attackFromTo(characterOne: Character, characterTwo: Character) {
    let random = this.randomService.randomDmgNoise();
    if (characterOne.attack + random > characterTwo.defense) {
      characterTwo.hp -= 2;
      this.characterTwoKillingSpreeCounter = 0
      this.characterOneKillingSpreeCounter++
      this.displayService.addHistoryEvent(
        `${characterOne.name} damaged ${characterTwo.name} for 2`
      );
    } else {
      this.displayService.addHistoryEvent(
        `${characterOne.name} not damaged ${characterTwo.name}`
      );
    }
    if (characterTwo.attack + random > characterOne.defense) {
      characterOne.hp -= 2;
      this.characterTwoKillingSpreeCounter++
      this.characterOneKillingSpreeCounter = 0
      this.displayService.addHistoryEvent(
        `${characterTwo.name} damaged ${characterOne.name} for 2`
      );
    } else {
      this.displayService.addHistoryEvent(
        `${characterTwo.name} not damaged ${characterOne.name}`
      );
    }
    this.killingSpreeCounter(characterOne, characterTwo);
  }

  private killingSpreeCounter(characterOne: Character, characterTwo: Character) {
    if (this.characterOneKillingSpreeCounter >= 3) {
      this.characterOneKillingSpreeCounter = 0;
      this.displayService.storeKillingSpreeMsg(`${characterOne.name} is on a killing spree.`);
    }
    if (this.characterTwoKillingSpreeCounter >= 3) {
      this.characterTwoKillingSpreeCounter = 0;
      this.displayService.storeKillingSpreeMsg(`${characterTwo.name} is on a killing spree.`);
    }
  }
}

