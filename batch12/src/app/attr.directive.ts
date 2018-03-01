import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
  @Input() appAttr(){}
  @Input() msg;

  constructor() { }

  @HostListener('click')
  callMeeee(){
    alert(this.msg);

    this.appAttr();
  }

/*  document.get.addEventLister('click', function(){

  })*/



}
