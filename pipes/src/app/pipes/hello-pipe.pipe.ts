import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'helloPipe'
})
export class HelloPipePipe implements PipeTransform {

  transform(name: string): string {
    return `hello ${name}`;
  }

}
