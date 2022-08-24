import { Pipe, PipeTransform, OnDestroy } from '@angular/core';

@Pipe({
  name: 'counterPipe',
  pure: false
})
export class CounterPipePipe implements PipeTransform {

  count = 0;
  interval:any;

  constructor(){
    setInterval(()=>{
      this.count++;
      console.log(this.count)
    }, 2000)
  }

  transform(input: string): string{
    return `${input}: ${this.count}`
  }

  ngOndestroy():void{
    clearInterval(this.interval); //megáll és elindul a számláló - van saját state-je a pipe-nak - ezzel az ngOndestroy-jal megsemmisül
  }

}
