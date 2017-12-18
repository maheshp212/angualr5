import { Directive } from '@angular/core';

@Directive({
  selector: '.appClasss'
})
export class ClasssDirective {

  constructor() {
    console.log('this is my class directive');
  }
}

/*<div class="appClasss"> this is my custom directive</div>
*/
