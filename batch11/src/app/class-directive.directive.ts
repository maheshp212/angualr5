import { Directive } from '@angular/core';

@Directive({
  selector: '.appClassDirective'
})
export class ClassDirectiveDirective {

  constructor() {

    alert('this is an class directive');

   }

}
