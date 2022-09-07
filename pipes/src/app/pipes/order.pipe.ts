import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

<<<<<<< HEAD
  transform(input:string, separator:string=" "): string {
    return input.split(" ").reverse().join(separator);
=======
  transform(input: string): unknown {
    let extension = input.split(".")
    return extension[extension.length-1]
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
  }

}
