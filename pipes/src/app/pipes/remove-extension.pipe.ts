import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeExtension'
})
export class RemoveExtensionPipe implements PipeTransform {

  transform(fileName: string): string {
    let file = fileName.split(".")
    file.pop();
    let returningValue = file.toString().replace(",",".")
    return returningValue
  }

}
