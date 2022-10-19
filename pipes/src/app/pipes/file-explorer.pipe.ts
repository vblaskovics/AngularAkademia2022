import { Pipe, PipeTransform } from '@angular/core';
import { refCount } from 'rxjs';

@Pipe({
  name: 'fileExplorer'
})
export class FileExplorerPipe implements PipeTransform {


  constructor() {

  }

  transform(input: string, separator: string = " "): unknown {
    let faszomat = input.split('.');
    return faszomat[faszomat.length-1]
  }

}
