import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filemb',
})
export class FilembPipe implements PipeTransform {
  transform(number: number): number {
    return number / 1024;
  }
}
