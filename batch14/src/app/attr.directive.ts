import { Directive, Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
  @Input() appAttr;
  @Input() msg;
  constructor() { }

  @HostListener('click')
  mahesh(){
    this.appAttr();
    //alert('this is custom directive');
    this.callMe();
  }
  callMe(){
    alert(this.msg);
  }

}
