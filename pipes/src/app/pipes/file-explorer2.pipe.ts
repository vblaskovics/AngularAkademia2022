import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileExplorer2'
})
export class FileExplorer2Pipe implements PipeTransform {

  transform(input: string, separator: string = " "): unknown {
    let faszomat = input.split('.');
    return faszomat[0]
  }

}
