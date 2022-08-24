import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filegb',
})
export class FilegbPipe implements PipeTransform {
  transform(number: number): number {
    return number / (1024 * 1024);
  }
}
