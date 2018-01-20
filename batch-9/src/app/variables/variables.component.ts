import { Component} from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
})
export class VariablesComponent {
  fname:string = 'qshore';
  lname:string = 'tech';
  age:number = 34;
  two:number = 344;
  fruits:string[];
  user:any;
  constructor() {
    this.fruits = ['banana', 'kiwi'];
    this.user = {name:'qshore', tech:'angular'};
  }
}
