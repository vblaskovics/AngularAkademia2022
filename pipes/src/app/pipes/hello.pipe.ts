import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello',
})
export class HelloPipe implements PipeTransform {
  transform(name: string): string {
    return `Hello ${name}!`;
  }
}
