import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extension',
})
export class ExtensionPipe implements PipeTransform {
  transform(filename: string, extension: boolean = true): string {
    return extension
      ? filename.substring(filename.lastIndexOf('.') + 1)
      : filename.substring(0, filename.lastIndexOf('.'));
  }
}
