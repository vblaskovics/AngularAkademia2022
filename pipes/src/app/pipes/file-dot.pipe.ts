import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileDot',
})
export class FileDotPipe implements PipeTransform {
  transform(name: string): string {
    return name.slice(name.lastIndexOf('.') + 1);
  }
}
