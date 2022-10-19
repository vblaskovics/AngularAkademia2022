import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileExplorer3'
})
export class FileExplorer3Pipe implements PipeTransform {

  transform(input: number): unknown {
    let faszom = input / 1024 / 1024;
    return faszom
  }

}
