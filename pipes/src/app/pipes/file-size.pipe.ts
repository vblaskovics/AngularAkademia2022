import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
})
export class FileSizePipe implements PipeTransform {
  transform(value: number, type: string = 'MB'): string {
    if (type === 'MB') {
      return `${Math.floor((value / 1048576) * 100) / 100} MB`;
    } else if (type === 'GB') {
      return `${Math.floor((value / 1073741824) * 100) / 100} GB`;
    }
    return `${value}`;
  }
}
