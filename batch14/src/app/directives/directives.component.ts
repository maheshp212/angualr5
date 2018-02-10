import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  fname:string = 'qshore';
  age:number = 23;
  fruits:string[] = ['kiwi','melon', 'berry'];
  lname:string = 'angular';
  count:number = 0;
  constructor() { }

  ngOnInit() {
  }

  callMe(){
    console.log(this.count);
    this.count++;
  }

}
