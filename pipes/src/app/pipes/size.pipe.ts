import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(input: number, unit?: string): unknown {
    const Mb = Math.round(input / (1024 ** 2));
    const Gb = Math.round(input / (1024 ** 3));

    if(unit === 'Gb') {
      return `${Gb} Gb`;
    }
    return `${Mb} Mb`;
  }

}
