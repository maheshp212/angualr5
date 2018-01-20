import { Component} from '@angular/core';

@Component({
  selector: 'my-directives',
  templateUrl: './directives.component.html',
})
export class DirectivesComponent {

  fname:string = "qshores";

  fruits:string[] = ['banana', 'kiwi', 'litchi'];

  constructor(){
    for(let i =0;i<10;i++){

    }
  }

  dirCallMe(){
    alert('this is directive call me')
  }
}
