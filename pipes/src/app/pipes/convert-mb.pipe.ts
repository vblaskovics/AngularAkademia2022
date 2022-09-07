import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMb'
})
export class ConvertMbPipe implements PipeTransform {

  transform(size: number): number {
    return size/1024;
  }

}
