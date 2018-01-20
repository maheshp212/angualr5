import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexa'
})
export class HexaPipe implements PipeTransform {

  transform(input: number): string {
    return input.toString(16);
  }

}


