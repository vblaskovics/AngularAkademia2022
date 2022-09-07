import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitExtension'
})
export class SplitExtensionPipe implements PipeTransform {

  transform(name: string): string {
    let nameArray = name.split(/[\s.]+/);
    let last = nameArray[nameArray.length - 1]
    return last
  }

}
