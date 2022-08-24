import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(value: number, type:string='Mb'): string {
    if (type === 'Mb') {
      return `${Math.floor(value / 1024 / 1024)} Mb`;
    } else if (type === 'Gb') {
      return `${Math.floor((value / 1024 / 1024 / 1024) * 100) / 100} Gb`;
    }
    return `${value}`;
  }

}
