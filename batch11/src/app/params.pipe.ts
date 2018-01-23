import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(inp: number, one:number, two:number): any {
    return (inp * (one+two));
  }
}
