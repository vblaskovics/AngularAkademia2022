import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extension'
})
export class ExtensionPipe implements PipeTransform {

  transform(fileName: string, extension: boolean): string {
    let tokens: string[];
    if(!extension) {
      return fileName.split(".").slice(0, -1).join(".")
    } else {
      tokens = fileName.split(".");
      return tokens[1];
    }
  }

}
