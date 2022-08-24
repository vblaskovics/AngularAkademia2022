import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extension',
})
export class ExtensionPipe implements PipeTransform {
  transform(filename: string, extension: boolean=true): string {
    return filename.split('.')[extension ? 1 : 0];
  }
}
