import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello2'
})
export class Hello2Pipe implements PipeTransform {

  transform(dataSize: number): string {
    let data = dataSize / 125000000
    return `${data} Gb`
  }

}
