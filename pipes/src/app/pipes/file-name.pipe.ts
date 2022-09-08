import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileName',
})
export class FileNamePipe implements PipeTransform {
  transform(input: string, target?: string): string {
    let splitedInput = input.split('.');
    if (target == 'name') {
      let filename = '';
      for (let i = 0; i < splitedInput.length - 1; i++) {
        filename += splitedInput[i];
        if (i + 1 < splitedInput.length - 1) {
          filename += '.';
        }
      }
      return filename;
    }
    if (target == 'format') {
      return splitedInput[splitedInput.length - 1];
    }

    return input;
  }
}
