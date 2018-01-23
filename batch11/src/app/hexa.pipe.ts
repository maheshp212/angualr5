import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexa'
})
export class HexaPipe implements PipeTransform {

  transform(input:number): any {
    return input.toString(16);
  }

}

/*app.filter('fasdf' function(){
  return funciton(x){

  }
})*/
