import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(input:number, power:number, param1:number, param2:number): any {
    var mul = (param1*param2);
    return (Math.pow(input, power) + mul);
  }

}
