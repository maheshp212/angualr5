import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  age:number;
  count:number;
  fruits:string[] = ['kiwi', 'orange', 'chiku'];
  constructor() {
    this.age = 1254;
    this.count = 0;
  }

  ngOnInit() {
  }

  callMe(){
    console.log(this.count);
    this.count++;
  }

}
