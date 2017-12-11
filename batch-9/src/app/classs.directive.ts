import { Directive } from '@angular/core';

@Directive({
  selector: '.appClasss'
})
export class ClasssDirective {

  constructor() { alert('this is a class directive')}

}
