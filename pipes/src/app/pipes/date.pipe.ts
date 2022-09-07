import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(milisecs: number): any {
    console.log(milisecs)
    let date = new Date(milisecs)
    let localTime = date.toLocaleString('sv')
    let dateArray = localTime.split(" ")
    let firstDate = dateArray[0].replace("/", "-")
    console.log(localTime)
    return firstDate;
  }

}
