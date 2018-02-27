import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {
  fname:string = 'qshore' // string
  lname:string = 'tech'
  age:number = 23;
  fruits:string[] = ['kiwi', 'orange', 'chiku'];
  gender:boolean = true;
  user:any = {name:'qshore', interst:'angular'}

  gao:string
  constructor(){
      this.gao = 'anuglar js';
  }

}
