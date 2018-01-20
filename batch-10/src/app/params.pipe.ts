import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(value: any, param1:any, param2:any ,param3:any): any {
    return value * (param1 + param2 + param3);
  }

}
