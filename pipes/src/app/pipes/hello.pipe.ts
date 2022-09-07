import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello'
})
export class HelloPipe implements PipeTransform {

<<<<<<< HEAD
  transform(name:string): string {
    return `Hello ${name}!`;
=======
  transform(dataSize: number): string {
    let data = dataSize / 125000
    return `${data} Mb`
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
  }

}
