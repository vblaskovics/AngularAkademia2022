import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-wage-info',
  templateUrl: './wage-info.component.html',
  styleUrls: ['./wage-info.component.scss']
})
export class WageInfoComponent implements OnInit {

  currentMoney: number = 0;
  monthlyIncome: number =0;
  sumOfWage!: number; 
  // isStable: boolean = true;
  // total = this.totalSum() // does not work properly because of ngModel

  constructor(private playerService: PlayerService,) { 
    this.sumOfWage = this.playerService.sumOfWage - this.playerService.sumOfWage*2;
    
  }

  ngOnInit(): void {
  }
 

  // totalSum(): any{
  //   this.playerService.wageTotal() + this.currentMoney
  // }

  // notStable(): any{
  //   if(this.currentMoney + this.monthlyIncome >= this.sumOfWage)
  //   return this.isStable = false;
  // }


}
