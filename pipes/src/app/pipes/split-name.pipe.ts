import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitName'
})
export class SplitNamePipe implements PipeTransform {

  transform(name: string): string {
    let nameArray = name.split(".");
    nameArray.pop()
    let fileName = nameArray.toString().replace(",", ".") 
    return fileName
  }
}
