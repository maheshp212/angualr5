import { Directive, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appAttrDirective]'
})
export class AttrDirectiveDirective {
  @Input() appAttrDirective(){}
  @Input() msg;
  constructor() { }
  @HostListener('click')
  callme(){
    var r = window.confirm(this.msg)
    if(r){
    // this will call the component based functionality
    this.appAttrDirective();
    //this will call the direcives custom logic
    this.myownFun()
    }
  }
  myownFun(){
    console.log('directive specific functionality')
  }
}
/*<button [appAttrDirective]="cus1" msg="Do you want to continue??">
cusom1 directive</button>*/
