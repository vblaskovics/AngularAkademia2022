import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(input: string, ext?: string): string {
    const extension = input.substring(input.lastIndexOf('.') + 1, input.length);
    const fileName = input.substring(input.lastIndexOf('.'), 0);

    if(ext) {
      return extension;
    }
      return fileName;
  }

}
