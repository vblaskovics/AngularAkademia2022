import { Component, OnInit } from '@angular/core';
import { Files } from '../files.model';
import { SizePipe } from '../pipes/size.pipe';

@Component({
  selector: 'app-pipe-table',
  templateUrl: './pipe-table.component.html',
  styleUrls: ['./pipe-table.component.css']
})
export class PipeTableComponent implements OnInit {

  files: Files[];
  // showMB: boolean = true;
  format: string = 'MB'
  // showMB: SizePipe = new SizePipe


  constructor() { 
    this.files = [{
      name:'run',
      date:new Date(),
      size: 100,
      extension:'.exe',
      time: new Date()
    },
    {
      name:'source',
      date:new Date(),
      size: 30,
      extension:'.ics',
      time: new Date()
    },
    {
      name:'index',
      date:new Date(),
      size: 5,
      extension:'.html',
      time: new Date()
    }]
  }

  ngOnInit(): void {
  }

  // onClickMB():any {
  //   let sizePipe = new SizePipe();

  //   if(this.showMB == 'MB')
  //   return sizePipe.transform(this.files.size.value)
  // }

  // onClickGB():any {
  //   let sizePipe = new SizePipe();

  //   if(this.showMB !== 'MB')
  //   return sizePipe.transform
  // }

}
