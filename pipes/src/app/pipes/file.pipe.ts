import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'file',
})
export class FilePipe implements PipeTransform {
  transform(name: string): string {
    return name.slice(0, name.lastIndexOf('.'));
  }
}
