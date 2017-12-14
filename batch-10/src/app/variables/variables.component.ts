import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

  fname:string =  "qshroe";
  age:number = 56;
  fruits:string[] = ['kiwi', 'litchi', 'berry', 'melon'];
  ages:number[] = [23,35,45];
  interests:null = null;
  gender:boolean = true;
  users:any = {key1: 'value1',key2: 'value2',key3: 'value3',}
  farms = [34, null, 'asdf', true];
  kils
  constructor() {
    console.log("interests :: " + this.interests);
    console.log("this.kils :: " + this.kils);
 }
  ngOnInit() {  }
}
