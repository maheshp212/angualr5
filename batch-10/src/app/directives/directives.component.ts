import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  i:number = 0;
  a:number = 45;
  fruits:string[] = ['kiwi','litchi','orange','melon','mango'];
  users:any = [
    {name:'qhsore', age:34},
    {name:'maesh', age:21},
    {name:'naresh', age:38},
    {name:'ashok', age:99},
    {name:'suresh', age:32},
    {name:'krishna', age:4},

  ]
  constructor() { }

  ngOnInit() {
  }
  callMe(){
    console.log('count ::' + this.i);
    this.i++
  }
}
