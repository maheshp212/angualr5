import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  fname:string;
  fruits:string[];
  count:number = 0;
  constructor() {

    this.fname = 'qshore';
    this.fruits = ['kiwi', 'orange', 'banana'];
  }

  ngOnInit() {
  }

  callMe(){
    console.log(this.count);
    this.count++;

  }

  display(){
    alert('custom directive invoked with componnet logic');
  }
}
