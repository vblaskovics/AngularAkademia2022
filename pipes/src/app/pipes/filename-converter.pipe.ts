import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filenameConverter',
})
export class FilenameConverterPipe implements PipeTransform {
  transform(fileName: string, method: 'name' | 'ext' = 'name'): string {
    let fileArray = fileName.split('.');
    if (method === 'name') {
      return fileArray[0];
    } else {
      return fileArray[1];
    }
  }
}
