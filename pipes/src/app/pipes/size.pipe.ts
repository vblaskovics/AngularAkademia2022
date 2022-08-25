import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {


  transform(size: number, unit?:string): any {

    const MB = size / 2 * 1024 ;
    const GB = MB / 1024;

    if(unit == "GB") return `${GB} ${unit}`
    else return `${MB} ${unit}`
  
  }

 
}
