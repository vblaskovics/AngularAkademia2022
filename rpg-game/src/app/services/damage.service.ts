import { DisplayService } from 'src/app/services/display.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DamageService {

  damageCounter: Array<any> = [
    { charName: "", causedDamage: 0 },
    { charName: "", causedDamage: 0 }
  ]

  constructor(private displayService: DisplayService) { }

  countDamage(charName: string) {
    if(!this.damageCounter[0].charName) {
      this.damageCounter[0].charName = charName;
      this.damageCounter[0].causedDamage++;
    } else if(charName === this.damageCounter[0].charName) {
      this.damageCounter[0].causedDamage++;
    } else if(!this.damageCounter[1].charName) {
      this.damageCounter[1].charName = charName;
      this.damageCounter[1].causedDamage++;
    } else if(charName === this.damageCounter[1].charName) {
      this.damageCounter[1].causedDamage++;
    }
    console.log('damageCounter', this.damageCounter);
    this.isMessage();
  }

  resetDamage(charName: string) {
    if(charName === this.damageCounter[0].charName) {
      this.damageCounter[0].causedDamage = 0;
    } else if(charName === this.damageCounter[1].charName) {
      this.damageCounter[1].causedDamage = 0;
    }
  }

  isMessage(): void {
    if(this.damageCounter[0].causedDamage >= 3) {
      this.displayService.message1 = `${this.damageCounter[0].charName} is in a killing serie`;
    }
    if(this.damageCounter[1].causedDamage >= 3) {
      this.displayService.message2 = `${this.damageCounter[1].charName} is in a killing serie`;
    }
  }

  clearDamageCounter() {
    this.damageCounter = [
      { charName: "", causedDamage: 0 },
      { charName: "", causedDamage: 0 }
    ]
  }

}
