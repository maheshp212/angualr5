import { Directive,Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() appAttr(){};
  @Input() msg = "do you want to continue??";

  @HostListener('click',['$event'])
  callMe(){
    var r = window.confirm(this.msg);
    if(r){

      this.appAttr();
    }
  }

}
