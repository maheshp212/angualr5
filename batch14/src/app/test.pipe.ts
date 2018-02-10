import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(inp: number, p1:number, p2:number ): any {
    return inp * (p1+p2);
  }

}
