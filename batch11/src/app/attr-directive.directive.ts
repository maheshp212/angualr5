import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttrDirective]'
})
export class AttrDirectiveDirective {


    @Input() appAttrDirective(){}
    @Input() msg = " this is default text";
  constructor() { }

  @HostListener('click')
  callme(){

    alert('attribute directive :: ' + this.msg);
    this.appAttrDirective();
  }

}
