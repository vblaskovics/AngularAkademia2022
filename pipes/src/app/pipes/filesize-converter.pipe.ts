import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesizeConverter',
})
export class FilesizeConverterPipe implements PipeTransform {
  transform(size: number, unit: 'GB' | 'MB' = 'GB'): number {
    if (unit === 'GB') {
      return size / 1024 / 1024 / 1024;
    } else {
      return size / 1024 / 1024;
    }
  }
}
