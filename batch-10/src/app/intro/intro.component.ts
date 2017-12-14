import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
})
export class IntroComponent {

  name:string = 'qshore'
  a:number = 56;
  b:number = 23;
  constructor() { }

}
