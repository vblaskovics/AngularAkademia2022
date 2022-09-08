import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
})
export class FileSizePipe implements PipeTransform {
  transform(value: number, unit?: string): string {
    if (unit == 'Gb') {
      return Math.round((value / 1000000000) * 100) / 100 + ' Gb';
    } else {
      return Math.round((value / 1000000) * 100) / 100 + ' Mb';
      //return (value / 1000000).toFixed(2) + ' Mb';
    }
  }
}
