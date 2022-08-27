import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mbToGb'
})
export class MbToGbPipe implements PipeTransform {

  transform(fileSize: number): number {
    return fileSize / 1024;
  }

}
