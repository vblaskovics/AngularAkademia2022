import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertGb'
})
export class ConvertGbPipe implements PipeTransform {

  transform(size: number): number {
    return size/1024/1024;
  }

}
