import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastModif'
})
export class LastModifPipe implements PipeTransform {

  difCount? : number

  transform(milisecs: number): any {
    setInterval(()=> {
      let current = new Date().getTime()
      this.difCount = (current - milisecs)/1000
    },1000)
    console.log(this.difCount)
    return this.difCount
  }


}
