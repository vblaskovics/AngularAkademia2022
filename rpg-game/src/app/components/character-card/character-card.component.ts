import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit, OnDestroy {
  @Input() hitCounter$!: Observable<number>;
  @Input() character!: Character;
  @Input() needsMirror: boolean = false;
  showMessage: boolean = false;
  hitCounterSub: Subscription = new Subscription();
  constructor() {
    // console.log();
    // this.hitCounter$.subscribe((x) => console.log(x));
    /*  this.hitCounterSub = this.hitCounter$.subscribe((x: number) => {
      if (x == 3) {
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 3000);
      }
    }); */
  }
  ngOnDestroy(): void {
    this.hitCounterSub.unsubscribe();
  }

  ngOnInit(): void {
    console.log(this.hitCounter$);
    this.hitCounterSub = this.hitCounter$.subscribe((x: number) => {
      if (x >= 3) {
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 3000);
      }
    });
  }
}
