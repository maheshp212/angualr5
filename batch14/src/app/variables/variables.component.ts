import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {
  fname:string = 'qshore';
  age:number = 23;
  fruits:string[] = ['kiwi','melon', 'berry'];
  user:any = {name:'qhsore', tech:'angular js'};
  gender:boolean = true;
  interest:null = null;

  lname:string;
  constructor(){
    this.lname = 'technologies'
  }

  qshore(){
    alert('im form variable component');
  }

}
